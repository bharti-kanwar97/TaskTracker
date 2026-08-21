import {useContext} from 'react'
import SettingsContext from '../context/SettingsContext'

function Settings() {
   const {setOpenSettings} = useContext(SettingsContext)
    
  return (
   <>
 <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl dark:bg-[#101b39]">
        <div className="mx-auto w-full max-w-lg p-4">
          <h1 className="text-2xl font-bold">
            Hello Settings
          </h1>

          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Saepe quisquam odit, maxime ullam mollitia cupiditate ipsum
            error excepturi et quibusdam!
          </p>
          <button onClick={setOpenSettings(false)}>Cancel</button>
        </div>
      </div>
    </div>

   </>
  )
}

export default Settings
