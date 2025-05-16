"use client";
import React, { MouseEventHandler, useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { PiGitDiffFill } from 'react-icons/pi';
import { LuFiles } from 'react-icons/lu';
import { IoGitBranch, IoSearchSharp } from 'react-icons/io5';
import { VscExtensions, VscRemoteExplorer } from 'react-icons/vsc';
import { BsBarChartFill } from 'react-icons/bs';
import MonacoEditorImplementation from '@/components/editor/editor-implementation';
import toast, { Toast } from 'react-hot-toast';
import { files } from '@/data/editor-data';
import Image from 'next/image';

const toastId = 'toolbar-disabled-toast';

export const EditorComponent = () => {
  const [openedFile, setOpenedFile] = useState<number>(0);
  const file = files[openedFile];

  return (
    <div className='h-full rounded-xl z-10 bg-zinc-900 overflow-hidden hidden lg:block'>
      <div className='flex items-center justify-between px-4 py-2 bg-zinc-800'>
        <div className='flex items-center gap-2 select-none'>
          <div className='w-3 h-3 rounded-full bg-red-500 '></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500 '></div>
          <div className='w-3 h-3 rounded-full bg-green-500 '></div>
        </div>
        <div className='flex items-center gap-2 select-none'>
          <div className='w-3 h-3 rounded-full bg-zinc-700 '></div>
          <div className='w-3 h-3 rounded-full bg-zinc-700 '></div>
          <div className='w-3 h-3 rounded-full bg-zinc-700 '></div>
        </div>
      </div>
      <div className='flex border-t border-t-zinc-950 h-full'>
        <div className='flex w-12 h-full select-none'>
          <div className='flex flex-col items-center gap-2 p-2 bg-zinc-800'>
            {[LuFiles, IoSearchSharp, IoGitBranch, VscRemoteExplorer, VscExtensions, BsBarChartFill].map((Icon, index) => (
              <div
                key={index}
                className='flex justify-center items-center w-8 h-8 text-gray-400 hover:text-gray-200'
                onClick={(e) => {
                  e.stopPropagation();
                  toast.custom(
                    (toast) => (
                      <ToastContent toast={toast} title='Hey there!' message='Thanks for your interest, but toolbar is disabled right now.' />
                    ),
                    {
                      id: toastId
                    }
                  );
                }}
              >
                {<Icon />}
              </div>
            ))}
          </div>
        </div>
        <div className={`h-full w-full`}>
          <div className='flex justify-between'>
            <div className='flex'>
              {files.map((file, index) => (
                <TabItem
                  key={index}
                  icon={<file.icon className='h-4 w-4 text-blue-400' />}
                  label={file.fileName}
                  isSelected={openedFile == index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenedFile(index);
                  }}
                />
              ))}
            </div>
            <div className='flex justify-start items-center mr-2'>
              <span
                className='flex justify-center items-center w-6 h-6 hover:bg-zinc-800 rounded-md'
                onClick={(e) => {
                  e.stopPropagation();
                  toast.custom(
                    (toast) => (
                      <ToastContent toast={toast} title='Hey there!' message='Thanks for your interest, but difference view is disabled right now.' />
                    ),
                    {
                      id: toastId
                    }
                  );
                }}
              >
                <PiGitDiffFill className='h-4 w-4 text-blue-600' />
              </span>
            </div>
          </div>
          <MonacoEditorImplementation language={file.language} initialValue={file.initialValue} path={file.fileName} />
        </div>
      </div>
    </div>
  );
};

const TabItem = ({
  icon,
  label,
  isSelected,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => (
  <div
    className={`flex gap-2 text-zinc-600 font-semibold  ${isSelected && 'border-t border-t-blue-700'} border-r border-r-zinc-800`}
    onClick={(e) => onClick(e)}
  >
    <div className='flex justify-between items-center gap-1 min-w-36 px-2 py-1 text-xs select-none'>
      <div className='flex justify-start items-center gap-2'>
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div>
        <span
          className='flex justify-center items-center w-6 h-6 hover:bg-zinc-800 rounded-md'
          onClick={(e) => {
            e.stopPropagation();
            toast.custom(
              (toast) => (
                <ToastContent toast={toast} title='Hey there!' message="Thanks for your interest, but this tab can't be closed right now." />
              ),
              {
                id: toastId
              }
            );
          }}
        >
          <Cross2Icon className='h-3 w-3 font-bold' />
        </span>
      </div>
    </div>
  </div>
);

const ToastContent = ({ toast, title, message }: { toast: Toast; title: string; message: string }) => (
  <div
    className={`${toast.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className='flex-1 w-0 p-4'>
      <div className='flex items-start'>
        <div className='flex-shrink-0 pt-0.5'>
          <Image
            className='h-10 w-10 rounded-full'
            src='https://api.dicebear.com/9.x/avataaars/svg?seed=Angel'
            alt='profile-icon'
            width={25}
            height={36}
            unoptimized
          />
        </div>
        <div className='ml-3 flex-1'>
          <p className='text-sm font-medium text-gray-900'>{title}</p>
          <p className='mt-1 text-sm text-gray-500'>{message}</p>
        </div>
      </div>
    </div>
  </div>
);



