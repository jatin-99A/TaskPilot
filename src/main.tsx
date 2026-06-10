import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TodosProvider from './state/todo/todo-provider.tsx'
import { PopUpContainerProvider } from './state/pop-up-container/pop-up-container-provider.tsx'
import { ReminderProvider } from './state/reminder/reminder-provider.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReminderProvider>
      <PopUpContainerProvider>

        <TodosProvider>
          <App />
        </TodosProvider>

      </PopUpContainerProvider>
    </ReminderProvider>
  </StrictMode>,
)
