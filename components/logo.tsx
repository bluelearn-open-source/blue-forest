import React from 'react'

export default function Logo({href}:{href:string}) {
    return (
        <a href={href}>
            <div className="inline-flex items-start justify-start">
                <p className="text-4xl font-medium tracking-wider text-blue-600">Blue</p>
                <p className="text-4xl font-medium tracking-wider text-gray-800">Forest</p>
            </div>
        </a>
    )
}
