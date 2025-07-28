/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { X } from 'lucide-react'
import { useState } from 'react'
import Drawer from './'

const meta: Meta<typeof Drawer> = {
  title: 'Components/UIElements/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Drawer is a component that slides in from the edge of the screen to display content or actions. It is commonly used for navigation, forms, or additional information without leaving the current page.',
      },
    },
  },
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Controls whether the drawer is open.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => {
    const [drawerEnd, setDrawerEnd] = useState<boolean>(false)
    const drawerEndToggle = () => setDrawerEnd(!drawerEnd)

    const [drawerStart, setDrawerStart] = useState<boolean>(false)
    const drawerStartToggle = () => setDrawerStart(!drawerStart)

    const [drawerBottom, setDrawerBottom] = useState<boolean>(false)
    const drawerBottomToggle = () => setDrawerBottom(!drawerBottom)

    const [drawerTop, setDrawerTop] = useState<boolean>(false)
    const drawerTopToggle = () => setDrawerTop(!drawerTop)

    return (
      <div className="flex flex-wrap gap-2">
        <button
          data-drawer-target="drawerEnd"
          type="button"
          className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          onClick={drawerEndToggle}
        >
          End Button
        </button>

        <Drawer
          show={drawerEnd}
          onHide={drawerEndToggle}
          id="drawerEnd"
          drawer-end="true"
          className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow ltr:right-0 rtl:left-0 md:w-80 z-drawer dark:bg-zink-600"
        >
          <Drawer.Header
            className="flex items-center justify-between p-4 border-b card-body border-slate-200 dark:border-zink-500"
            closeButtonClass="lucide lucide-x size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"
          >
            <Drawer.Title className="text-15">Drawer Heading</Drawer.Title>
            <X className="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"></X>
          </Drawer.Header>
          <Drawer.Body className="h-full p-4 overflow-y-auto">
            <div className="card-body">
              <h6 className="mb-4 text-15">Drawer Content</h6>
              <p className="text-slate-500 dark:text-zink-200">
                They all have something to say beyond the words on the page. They can come across as
                casual or neutral, exotic or graphic.
              </p>
            </div>
          </Drawer.Body>
          <Drawer.Footer className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-zink-500">
            <h6 className="text-15">Drawer Footer</h6>
          </Drawer.Footer>
        </Drawer>

        <button
          data-drawer-target="drawerStart"
          type="button"
          className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          onClick={drawerStartToggle}
        >
          Start Drawer
        </button>

        <Drawer
          show={drawerStart}
          onHide={drawerStartToggle}
          id="drawerStart"
          drawer-start="true"
          className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow ltr:left-0 rtl:right-0 md:w-80 z-drawer dark:bg-zink-600"
        >
          <Drawer.Header
            className="flex items-center justify-between p-4 border-b card-body border-slate-200 dark:border-zink-500"
            closeButtonClass="lucide lucide-x size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"
          >
            <Drawer.Title className="text-15">Drawer Heading</Drawer.Title>
            <X className="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"></X>
          </Drawer.Header>
          <Drawer.Body className="h-full p-4 overflow-y-auto">
            <div className="card-body">
              <h6 className="mb-4 text-15">Drawer Content</h6>
              <p className="text-slate-500 dark:text-zink-200">
                They all have something to say beyond the words on the page. They can come across as
                casual or neutral, exotic or graphic.
              </p>
            </div>
          </Drawer.Body>
          <Drawer.Footer className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-zink-500">
            <h6 className="text-15">Drawer Footer</h6>
          </Drawer.Footer>
        </Drawer>

        <button
          data-drawer-target="drawerBottom"
          type="button"
          className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          onClick={drawerBottomToggle}
        >
          Bottom Drawer
        </button>

        <Drawer
          show={drawerBottom}
          onHide={drawerBottomToggle}
          id="drawerBottom"
          drawer-bottom="true"
          className="fixed bottom-0 left-0 right-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow md:h-80 z-drawer dark:bg-zink-600"
        >
          <Drawer.Header
            className="flex items-center justify-between p-4 border-b card-body border-slate-200 dark:border-zink-500"
            closeButtonClass="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"
          >
            <Drawer.Title className="text-15">Drawer Heading</Drawer.Title>
            <X className="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"></X>
          </Drawer.Header>
          <Drawer.Body className="h-full p-4 overflow-y-auto">
            <div className="card-body">
              <h6 className="mb-4 text-15">Drawer Content</h6>
              <p className="text-slate-500 dark:text-zink-200">
                They all have something to say beyond the words on the page. They can come across as
                casual or neutral, exotic or graphic.
              </p>
            </div>
          </Drawer.Body>
          <Drawer.Footer className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-zink-500">
            <h6 className="text-15">Drawer Footer</h6>
          </Drawer.Footer>
        </Drawer>

        <button
          data-drawer-target="drawerTop"
          type="button"
          className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
          onClick={drawerTopToggle}
        >
          Top Drawer
        </button>
        <Drawer
          show={drawerTop}
          onHide={drawerTopToggle}
          id="drawerTop"
          drawer-top="true"
          className="fixed top-0 left-0 right-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow md:h-80 z-drawer dark:bg-zink-600"
        >
          <Drawer.Header
            className="flex items-center justify-between p-4 border-b card-body border-slate-200 dark:border-zink-500"
            closeButtonClass="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"
          >
            <Drawer.Title className="text-15">Drawer Heading</Drawer.Title>
            <X className="size-4 transition-all duration-200 ease-linear text-slate-500 hover:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50"></X>
          </Drawer.Header>
          <Drawer.Body className="h-full p-4 overflow-y-auto">
            <div className="card-body">
              <h6 className="mb-4 text-15">Drawer Content</h6>
              <p className="text-slate-500 dark:text-zink-200">
                They all have something to say beyond the words on the page. They can come across as
                casual or neutral, exotic or graphic.
              </p>
            </div>
          </Drawer.Body>
          <Drawer.Footer className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-zink-500">
            <h6 className="text-15">Drawer Footer</h6>
          </Drawer.Footer>
        </Drawer>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'The Drawer component can be used to show additional content or actions without navigating away from the current page. It supports different positions and can be controlled programmatically.',
      },
    },
  },
}
