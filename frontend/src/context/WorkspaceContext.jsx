import React, { createContext, useState, useContext } from 'react';

const WorkspaceContext = createContext();

export const useWorkspace = () => useContext(WorkspaceContext);

// Workspace shape:
// { title: string, channels: string[], messages: { [channel]: Message[] } }

export const WorkspaceProvider = ({ children }) => {
    // store workspaces as a map: { [title]: { title, channels, icon, messages } }
    const [workspaces, setWorkspaces] = useState({});
    const [selectedWorkspaceTitle, setSelectedWorkspaceTitle] = useState(null);
    const [activeChannel, setActiveChannel] = useState(null);

    // derive currently selected workspace
    const workspace = selectedWorkspaceTitle ? workspaces[selectedWorkspaceTitle] : null;

    const selectWorkspace = (template) => {
        // Backwards compatible helper used by Welcome.jsx: add the template and select it
        const title = template.name || template.title || 'Untitled Workspace';
        addWorkspace({ title, channels: template.channels || [], icon: template.icon });
        // addWorkspace will select and set active channel
    };

    const addWorkspace = ({ title, channels = ['#general'], icon = '🏷️' }) => {
        const normalizedChannels = channels.map((c) => (c.startsWith('#') ? c : `#${c}`));
        const messages = {};
        normalizedChannels.forEach((ch) => (messages[ch] = []));
        if (normalizedChannels.length > 0) {
            messages[normalizedChannels[0]] = [
                { user: 'System', text: `Welcome to ${normalizedChannels[0]} in ${title}`, time: new Date().toLocaleTimeString() },
            ];
        }

        setWorkspaces((prev) => ({ ...prev, [title]: { title, channels: normalizedChannels, icon, messages } }));
        setSelectedWorkspaceTitle(title);
        setActiveChannel(normalizedChannels[0] || null);
    };

    const createCustomWorkspace = (opts = {}) => addWorkspace(opts);

    const selectWorkspaceByTitle = (title) => {
        if (!workspaces[title]) return;
        setSelectedWorkspaceTitle(title);
        const ch = workspaces[title].channels?.[0] || null;
        setActiveChannel(ch);
    };

    const sendMessage = (channel, message) => {
        if (!selectedWorkspaceTitle) return;
        setWorkspaces((prev) => {
            const ws = prev[selectedWorkspaceTitle];
            if (!ws) return prev;
            const newMessages = { ...ws.messages };
            if (!newMessages[channel]) newMessages[channel] = [];
            newMessages[channel] = [...newMessages[channel], message];
            return { ...prev, [selectedWorkspaceTitle]: { ...ws, messages: newMessages } };
        });
    };

    const value = {
        workspaces,
        workspace,
        selectedWorkspaceTitle,
        selectWorkspace,
        addWorkspace,
        createCustomWorkspace,
        selectWorkspaceByTitle,
        activeChannel,
        setActiveChannel,
        sendMessage,
    };

    return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
};
