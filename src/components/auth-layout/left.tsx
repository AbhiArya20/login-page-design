"use client"
import FeatureList from "@/components/features/feature-list";
import { EditorComponent } from "@/components/editor/editor";
import GlobeOwn from "@/components/globe/globe-own";
import Meteors from "@/components/magicui/meteors";
import Logo from "@/components/own/logo/logo";

export default function AuthLeft() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Meteors number={30} />
      <div className="pl-5 pt-5 hidden md:block">
        <Logo />
      </div>
      <div className="flex flex-col justify-between w-full h-[90%]">
        <FeatureList />
        <div className="flex justify-center items-center w-full h-[55%] m-auto">
          <div className="relative w-full h-full">
            <div className="hidden lg:flex justify-center items-center w-full h-full">
              <div className="w-4/5 h-full">
                <div className="w-full h-full login-page-drop-shadow">
                  <EditorComponent />
                </div>
              </div>
              <div className="absolute -bottom-24 -right-10 h-full w-full lg:w-[35rem]">
                <GlobeOwn />
              </div>
            </div>

            <div className="block lg:hidden w-full h-full login-page-drop-shadow">
              <div className="h-full w-1/2 md:w-full">
                <GlobeOwn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
