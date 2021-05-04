/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function Notification() {
    return (
        <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                    />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                        You're signed up!
                    </h3>
                </div>
            </div>
        </div>
    );
}
