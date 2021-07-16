import { forwardRef } from 'react'
import { useForm } from '@inertiajs/inertia-react'
import { DateTime } from 'luxon'
import { InformationCircleIcon, AtSymbolIcon, VideoCameraIcon, GlobeIcon } from '@heroicons/react/outline'

const UnclaimEventForm = forwardRef((props, ref) => {
    const { post } = useForm({
        event: props.event,
    })
    const handleSubmit = e => {
        e.preventDefault()
        post('/cancel')
    }
    return (
        <form ref={ref} onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
                <span className="font-bold text-xl">{DateTime.fromISO(props.event.start).toFormat('ff')}</span>
            </div>
            <div className="text-left">
                <div className="flex items-center space-x-2 mb-2">
                    <InformationCircleIcon className="h-7 w-7 flex-shrink-0" />
                    <span>{`Learning ${props.event.subject_name} from ${props.event.tutor_name}`}</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                    <GlobeIcon className="h-7 w-7 flex-shrink-0" />
                    <span>Tutor speaks {props.event.tutor_languages.length === 1 ? props.event.tutor_languages[0] : props.event.tutor_languages.length === 2 ? `${props.event.tutor_languages[0]} and ${props.event.tutor_languages[1]}` : props.event.tutor_languages.map((language, index) => props.event.tutor_languages.length - 1 === index ? `and ${language}` : `${language}, ` ) }</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <AtSymbolIcon className="h-7 w-7 flex-shrink-0" />
                    <span>{props.event.tutor_email}</span>
                </div>
                <div className="form-floating mb-5">
                    <textarea className="form-field !border-0 !bg-gray-200" value={props.event.info} disabled></textarea>
                    <label>What do you need help with?</label>
                </div>
            </div>
            <div>
                <a className="btn-positive flex justify-center items-center space-x-2 text-base tracking-wide w-full h-12" href={props.event.meeting_link} target="_blank" rel="noreferrer">
                    <VideoCameraIcon className="h-7 w-7" />
                    <span>Meeting link</span>
                </a>
            </div>
        </form>
    )
})

export default UnclaimEventForm