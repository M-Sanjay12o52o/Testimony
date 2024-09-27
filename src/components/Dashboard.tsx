"use client"

import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

export const DashboardPage = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState('');

    const addProject = () => {
        if (newProject.trim()) {
            setProjects([...projects, newProject.trim()]);
            setNewProject('');
        }
    };

    return (
        <div className="min-h-screen bg-purple-900 text-white p-8">
            <Link href="/" className="bg-white text-purple-900 px-4 py-2 rounded">Home</Link>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black p-4 rounded">
                    <h3 className="text-xl font-bold mb-2">Overview</h3>
                    <p>Total Projects: {projects.length}</p>
                    {/* Add more overview stats here */}
                </div>
                <div className="bg-black p-4 rounded">
                    <h3 className="text-xl font-bold mb-2">Projects</h3>
                    <ul className="space-y-2">
                        {projects.map((project: any, index: any) => (
                            <li key={index} className="bg-purple-800 p-2 rounded">{project}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-black p-4 rounded">
                    <h3 className="text-xl font-bold mb-2">Create New Project</h3>
                    <div className="flex">
                        <input
                            type="text"
                            value={newProject}
                            onChange={(e) => setNewProject(e.target.value)}
                            placeholder="Project name"
                            className="flex-grow p-2 rounded-l text-black"
                        />
                        <button onClick={addProject} className="bg-purple-600 p-2 rounded-r">Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
