import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Accordion.module.scss'
import { PlusIcon } from '@heroicons/react/solid'

const Accordion = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) return setSelected(null)

    setSelected(i)
  }

  const parentRef = useRef()

  return (
    <>
      <div
        className={`rounded-[2rem] border-2 border-black px-6 py-4 duration-300 ease-out hover:bg-red-300 ${
          selected === 1 ? 'bg-red-300' : 'bg-red-200'
        }`}
      >
        <div
          className={`flex cursor-pointer items-center justify-between text-xl font-semibold text-black sm:text-2xl`}
          onClick={() => {
            toggle(1)
          }}
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
          <span
            style={
              selected === 1
                ? {
                    transform: 'rotate(-45deg)',
                    transition: 'all ease-out 0.3s',
                  }
                : { transform: 'rotate(0deg)', transition: 'all ease-out 0.3s' }
            }
          >
            <PlusIcon className="h-6" />
          </span>
        </div>
        <div
          className={styles.content__parent}
          ref={parentRef}
          style={
            selected === 1
              ? {
                  height: parentRef.current.scrollHeight + 'px',
                }
              : {
                  height: '0px',
                }
          }
        >
          <p className={`text-lg font-light sm:text-xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            nesciunt?
          </p>
        </div>
      </div>
      <div
        className={`rounded-[2rem] border-2 border-black duration-300 ease-out hover:bg-red-300 ${
          selected === 2 ? 'bg-red-300' : 'bg-red-200'
        } px-6 py-4`}
      >
        <div
          className={`flex cursor-pointer items-center justify-between text-xl font-semibold text-black sm:text-2xl`}
          onClick={() => {
            toggle(2)
          }}
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
          <span
            style={
              selected === 2
                ? {
                    transform: 'rotate(-45deg)',
                    transition: 'all ease-out 0.3s',
                  }
                : { transform: 'rotate(0deg)', transition: 'all ease-out 0.3s' }
            }
          >
            <PlusIcon className="h-6" />
          </span>
        </div>
        <div
          className={styles.content__parent}
          ref={parentRef}
          style={
            selected === 2
              ? { height: parentRef.current.scrollHeight + 'px' }
              : {
                  height: '0px',
                }
          }
        >
          <p className={`text-lg font-light sm:text-xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            nesciunt?
          </p>
        </div>
      </div>
      <div
        className={`rounded-[2rem] border-2 border-black px-6 py-4 duration-300 ease-out hover:bg-red-300 ${
          selected === 3 ? 'bg-red-300' : 'bg-red-200'
        }`}
      >
        <div
          className={`flex cursor-pointer items-center justify-between text-xl font-semibold text-black sm:text-2xl`}
          onClick={() => {
            toggle(3)
          }}
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
          <span
            style={
              selected === 3
                ? {
                    transform: 'rotate(-45deg)',
                    transition: 'all ease-out 0.3s',
                  }
                : { transform: 'rotate(0deg)', transition: 'all ease-out 0.3s' }
            }
          >
            <PlusIcon className="h-6" />
          </span>
        </div>
        <div
          className={styles.content__parent}
          ref={parentRef}
          style={
            selected === 3
              ? { height: parentRef.current.scrollHeight + 'px' }
              : {
                  height: '0px',
                }
          }
        >
          <p className={`text-lg font-light sm:text-xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            nesciunt?
          </p>
        </div>
      </div>
      <div
        className={`rounded-[2rem] border-2 border-black px-6 py-4 duration-300 ease-out hover:bg-red-300 ${
          selected === 4 ? 'bg-red-300' : 'bg-red-200'
        }`}
      >
        <div
          className={`flex cursor-pointer items-center justify-between text-xl font-semibold text-black sm:text-2xl`}
          onClick={() => {
            toggle(4)
          }}
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
          <span
            style={
              selected === 4
                ? {
                    transform: 'rotate(-45deg)',
                    transition: 'all ease-out 0.3s',
                  }
                : { transform: 'rotate(0deg)', transition: 'all ease-out 0.3s' }
            }
          >
            <PlusIcon className="h-6" />
          </span>
        </div>
        <div
          className={styles.content__parent}
          ref={parentRef}
          style={
            selected === 4
              ? { height: parentRef.current.scrollHeight + 'px' }
              : {
                  height: '0px',
                }
          }
        >
          <p className={`text-lg font-light sm:text-xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            nesciunt?
          </p>
        </div>
      </div>
      <div
        className={`rounded-[2rem] border-2 border-black px-6 py-4 duration-300 ease-out hover:bg-red-300 ${
          selected === 5 ? 'bg-red-300' : 'bg-red-200'
        }`}
      >
        <div
          className={`flex cursor-pointer items-center justify-between text-xl font-semibold text-black sm:text-2xl`}
          onClick={() => {
            toggle(5)
          }}
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
          <span
            style={
              selected === 5
                ? {
                    transform: 'rotate(-45deg)',
                    transition: 'all ease-out 0.3s',
                  }
                : { transform: 'rotate(0deg)', transition: 'all ease-out 0.3s' }
            }
          >
            <PlusIcon className="h-6" />
          </span>
        </div>
        <div
          className={styles.content__parent}
          ref={parentRef}
          style={
            selected === 5
              ? { height: parentRef.current.scrollHeight + 'px' }
              : {
                  height: '0px',
                }
          }
        >
          <p className={`text-lg font-light sm:text-xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            nesciunt?
          </p>
        </div>
      </div>
    </>
  )
}

export default Accordion
