'use client';

import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

export default function UsersComponent({ climbers }) {
  const [compClimbers, setCompClimbers] = useState(climbers); //user
  const [showAllClimbers, setShowAllClimbers] = useState(false); //user
  const displayedClimbers = showAllClimbers
    ? compClimbers
    : compClimbers.slice(0, 10); //users
  return (
    <div>
      <div>
        <h3 className="text-3xl mt-3">Climbers</h3>
        <div className="bg-bg2 flex-col gap-2 flex p-3 rounded w-full overflow-hidden">
          {compClimbers.length > 0 ? (
            <div className="w-full flex-col flex gap-2 overflow-hidden">
              {displayedClimbers.map((climber) => (
                <button key={climber.id} className="w-full">
                  <div className="grid bg-bg1 grid-cols-[1fr,auto] items-center p-1 px-2 w-full max-w-full rounded">
                    <p className="text-xl justify-self-start truncate max-w-[90%]">
                      {climber.name}
                    </p>
                    <p
                      className={clsx(
                        'text-base whitespace-nowrap place-self-end font-normal',
                        climber.entryMethod === 'APP'
                          ? 'text-green-500'
                          : 'text-white'
                      )}
                    >
                      {climber.entryMethod}
                    </p>
                  </div>
                </button>
              ))}
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-1">
                  <button className="bg-green-400 p-1 rounded-full max-w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-7 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                  <p className="font-medium">Add Manual User</p>
                </div>
                <button
                  className={'px-2 py-1 bg-blue-500 rounded'}
                  onClick={() => setShowAllClimbers(!showAllClimbers)}
                >
                  {showAllClimbers ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
