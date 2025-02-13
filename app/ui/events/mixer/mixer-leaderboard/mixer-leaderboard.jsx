'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function MixerLeaderBoard({
  formattedDivisions,
  combinedScores,
  adjustedRankings,
  boulderScoresRanked,
  ropeScoresRanked,
}) {
  const [isReady, setIsReady] = useState(false);
  const [isBoulders, setIsBoulders] = useState(false);
  const [isRopes, setIsRopes] = useState(false);
  const [openDivisions, setOpenDivisions] = useState({});
  useEffect(() => {
    const storedIsReady = localStorage.getItem('isReady');
    if (storedIsReady === 'true') {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isReady', isReady);
  }, [isReady]);
  const handleToggleDivision = (divisionName) => {
    setOpenDivisions((prev) => ({
      ...prev,
      [divisionName]: !prev[divisionName], // Toggle true/false
    }));
  };
  const handleViewScores = () => {
    setIsReady(true);
  };
  const handleBoulderScores = () => {
    setIsBoulders(!isBoulders);
  };
  const handleRopeScores = () => {
    setIsRopes(!isRopes);
  };
  return (
    <>
      {!isReady ? (
        <div className="flex flex-col h-screen-offset items-center justify-start py-10 px-10">
          <h1 className="text-white font-barlow text-5xl text-center">
            Scores Are Ready!
          </h1>
          <div className="flex-1 justify-center flex flex-col gap-3 items-center">
            <p className="text-white font-barlow text-center">
              By clicking this button, you will be able to view all scores for
              the Spring Mixer 2024!
            </p>
            <button
              onClick={handleViewScores}
              className="text-white bg-green-500 px-3 py-2 rounded font-barlow w-44 text-2xl shadow-lg shadow-green-500 outline outline-2 outline-white"
            >
              View Scores
            </button>
            <p className="text-white font-barlow text-xs text-center">
              If you want to keep the suspense, wait till the scores are
              announced in person
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {/* top three */}
          <div className="flex flex-col justify-center items-center p-3 mb-5">
            <h1 className="text-white font-barlow text-3xl mb-3">
              Top 3 Overall
            </h1>
            <div className="flex flex-col gap-4">
              {combinedScores.slice(0, 3).map((score, index) => (
                <div
                  className={clsx(
                    'flex w-80 rounded-lg justify-start p-2 px-4 items-center outline outline-white outline-2',
                    index === 0 && 'bg-amber-500 shadow-lg shadow-amber-500', // Gold
                    index === 1 && 'bg-gray-400 shadow-lg shadow-gray-400', // Silver
                    index === 2 && 'bg-orange-600 shadow-lg shadow-orange-600' // Bronze
                  )}
                  key={index}
                >
                  <p className="text-white font-jersey drop-shadow-customBlack text-3xl">
                    {index + 1}
                  </p>
                  <p className="text-white text-lg font-barlow flex-1 text-center drop-shadow-customBlack">
                    {score.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* By Division */}
          <div className="flex flex-col gap-3 mb-8 px-6 w-full max-w-3xl">
            <h2 className="font-barlow text-3xl text-white text-start">
              By Division
            </h2>

            {Object.entries(adjustedRankings.updatedDivisions).map(
              ([divisionName, divisionData]) => (
                <div key={divisionName} className="flex flex-col gap-2">
                  {/* Division Button */}
                  <button
                    className={clsx(
                      'bg-bg1 flex w-full rounded justify-center p-2 outline outline-1 outline-white',
                      openDivisions[divisionName] && 'bg-bg2' // Change color when open
                    )}
                    onClick={() => handleToggleDivision(divisionName)}
                  >
                    <p className="text-white font-barlow text-center">
                      {divisionName}
                    </p>
                  </button>

                  {/* AnimatePresence for Smooth Open/Close */}
                  <AnimatePresence>
                    {openDivisions[divisionName] && (
                      <motion.div
                        className="flex flex-col w-[95%] max-w-lg gap-1 justify-center items-center bg-bg2 outline outline-white outline-1 p-3 self-center rounded"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        {/* Display rankings inside the division */}
                        {divisionData.rankings.map((climber, index) => (
                          <motion.div
                            key={climber.name}
                            className={clsx(
                              'w-full max-w-md rounded flex justify-between px-4 py-1',
                              index === 0 &&
                                'bg-amber-500 shadow-lg shadow-amber-500',
                              index === 1 &&
                                'bg-gray-400 shadow-lg shadow-gray-400',
                              index === 2 &&
                                'bg-orange-600 shadow-lg shadow-orange-600',
                              index > 2 && 'bg-bg1'
                            )}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.2 }}
                          >
                            <p className="text-white font-jersey">
                              {index + 1}
                            </p>
                            <p className="text-white font-jersey">
                              {climber.name}
                            </p>
                            <p className="text-white font-jersey">
                              {climber.combinedRank}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </div>

          {/* Total Scores by Type */}
          <div className="flex flex-col gap-3 mb-20 px-6 w-full max-w-3xl">
            <h2 className="font-barlow text-3xl text-white text-start">
              Total Scores by Type
            </h2>

            <div className="flex flex-col gap-2">
              {/* Ropes Button */}
              <button
                className={clsx(
                  'bg-bg1 flex w-full rounded justify-center p-2 outline outline-1 outline-white',
                  isRopes && 'bg-bg2'
                )}
                onClick={handleRopeScores}
              >
                <p className="text-white font-barlow text-center">Ropes</p>
              </button>

              {/* Ropes Scores List */}
              <AnimatePresence>
                {isRopes && (
                  <motion.div
                    className="flex flex-col w-[95%] max-w-lg gap-1 justify-center items-center bg-bg2 outline outline-white outline-1 p-3 self-center rounded"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {ropeScoresRanked.map((climber) => (
                      <motion.div
                        key={climber.name}
                        className={clsx(
                          'w-full max-w-md rounded flex justify-between px-4 py-1',
                          climber.rank === 1 &&
                            'bg-amber-500 shadow-lg shadow-amber-500',
                          climber.rank === 2 &&
                            'bg-gray-400 shadow-lg shadow-gray-400',
                          climber.rank === 3 &&
                            'bg-orange-600 shadow-lg shadow-orange-600',
                          climber.rank > 3 && 'bg-bg1'
                        )}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 * climber.rank,
                          duration: 0.2,
                        }}
                      >
                        <p className="text-white font-jersey">{climber.rank}</p>
                        <p className="text-white font-jersey">{climber.name}</p>
                        <p className="text-white font-jersey">
                          {climber.score}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-2">
              {/* Boulders Button */}
              <button
                className={clsx(
                  'bg-bg1 flex w-full rounded justify-center p-2 outline outline-1 outline-white',
                  isBoulders && 'bg-bg2'
                )}
                onClick={handleBoulderScores}
              >
                <p className="text-white font-barlow text-center">Boulders</p>
              </button>

              {/* Boulders Scores List */}
              <AnimatePresence>
                {isBoulders && (
                  <motion.div
                    className="flex flex-col w-[95%] max-w-lg gap-1 justify-center items-center bg-bg2 outline outline-white outline-1 p-3 self-center rounded"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {boulderScoresRanked.map((climber) => (
                      <motion.div
                        key={climber.name}
                        className={clsx(
                          'w-full max-w-md rounded flex justify-between px-4 py-1',
                          climber.rank === 1 &&
                            'bg-amber-500 shadow-lg shadow-amber-500',
                          climber.rank === 2 &&
                            'bg-gray-400 shadow-lg shadow-gray-400',
                          climber.rank === 3 &&
                            'bg-orange-600 shadow-lg shadow-orange-600',
                          climber.rank > 3 && 'bg-bg1'
                        )}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 * climber.rank,
                          duration: 0.2,
                        }}
                      >
                        <p className="text-white font-jersey">{climber.rank}</p>
                        <p className="text-white font-jersey">{climber.name}</p>
                        <p className="text-white font-jersey">
                          {climber.score}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
