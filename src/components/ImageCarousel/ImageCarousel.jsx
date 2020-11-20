import React, { useState, useEffect } from 'react'
import matcha1 from './images/matcha-1.jpg'
import matcha2 from './images/matcha-2.jpg'
import matcha3 from './images/matcha-3.jpg'
import matcha4 from './images/matcha-4.jpg'

const images = [matcha1, matcha2, matcha3, matcha4]

const ImageCard = (props) => {
  return (
    <img
      src={props.src}
      width={props.width || 293}
      height={props.height || 293}
      style={{
        borderRadius: '10px',
      }}
      alt="matcha"
    />
  )
}

function ImageCarousel() {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const next = () => setIndex((index + 1) % images.length)
  const previous = () => setIndex((index - 1 + images.length) % images.length)
  const first = () => setIndex(0)
  const last = () => setIndex(images.length - 1)
  const play = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    // componentDidMount, componentDidUpdate
    console.log('componentDidMount, componentDidUpdate')
    let timeout = setTimeout(() => {
      if (isPlaying) {
        setIndex((index + 1) % images.length)
      }
    }, 1500)

    return () => {
      // componentWillUmount
      console.log('componentWillUmount')
      clearTimeout(timeout)
    }
  }, [index, isPlaying])

  useEffect(() => {
    // componentDidMount
    setIsPlaying(true)
  }, [])

  return (
    <div>
      <div>
        <ImageCard src={images[index]} />
      </div>
      <div>
        <button onClick={first}>{'<<'}</button>
        <button onClick={previous}>{'<'}</button>
        <button onClick={play}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={next}>{'>'}</button>
        <button onClick={last}>{'>>'}</button>
      </div>
    </div>
  )
}

export default ImageCarousel
