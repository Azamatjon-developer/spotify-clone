import React, { useEffect, useState } from 'react'
import TopMusic from '../../components/TopMusic'
import Playback from '../../components/Playback'
import { useAuth } from '../../hooks/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../../hooks/useEnv'
import CardList from '../../components/CardList'
function Dashboard({ accessToken, setPlay, setPlaying }) {
  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  })

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  return (
    <div className="col-span-8 overflow-y-auto h-screen ">
      <h1 className="font-bold pt-[50px] pl-[41px]  text-white text-[39px] mb-[29px] ">
        Good afternoon
      </h1>

      <div className="">
        <CardList />
        <TopMusic
          setPlaying={setPlaying}
          accessToken={accessToken}
          setPlay={setPlay}
          partTitle={'Your top mixes'}
          defaultValue={'Billie Eilish'}
          searchText={''}
        />
        <TopMusic
          setPlaying={setPlaying}
          accessToken={accessToken}
          setPlay={setPlay}
          partTitle={'Made for you'}
          defaultValue={'Xamdam Sobirov'}
          searchText={''}
        />
        <TopMusic
          setPlaying={setPlaying}
          accessToken={accessToken}
          setPlay={setPlay}
          partTitle={'Recently played'}
          defaultValue={'Doston Ergashev'}
          searchText={''}
        />
        <TopMusic
          setPlaying={setPlaying}
          accessToken={accessToken}
          setPlay={setPlay}
          partTitle={'Jump back in'}
          defaultValue={'Billie Eilish '}
          searchText={''}
        />
        <TopMusic
          setPlaying={setPlaying}
          accessToken={accessToken}
          setPlay={setPlay}
          partTitle={'Uniquely yours'}
          defaultValue={'Yulduz Usmonova'}
          searchText={''}
        />
      </div>
    </div>
  )
}

export default Dashboard
