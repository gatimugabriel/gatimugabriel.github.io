import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faReact,
    faNodeJs,
    faGolang,
    faLinux,
    faAws,
    faDocker,
    faJs,
    faHtml5,
    faCss3Alt,
    faPython
} from '@fortawesome/free-brands-svg-icons';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <div className="flex flex-col items-center justify-center text-center pt-20 pb-6">
            <h2 className="text-3xl md:text-5xl mb-6 font-bold dark:text-white">Skills & Tools</h2>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faGolang} size="3x" className="text-blue-500"/>
                    <p className="mt-2 text-lg font-medium">Go</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faNodeJs} size="3x" className="text-blue-500"/>
                    <p className="mt-2 text-lg font-medium">NodeJS</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faPython} size="3x" className="text-blue-500"/>
                    <p className="mt-2 text-lg font-medium">Python</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faReact} size="3x" className="text-blue-500"/>
                    <p className="mt-2 text-lg font-medium">React</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faLinux} size="3x" className="text-blue-500"/>
                    <p className="mt-2 text-lg font-medium">Linux</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faAws} size="3x" className="text-blue-500"/>
                    <p className="mt-2 text-lg font-medium">AWS</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faDocker} size="3x" className="text-blue-500"/>
                    <p className="mt-2 text-lg font-medium">Docker</p>
                </div>

            </div>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faJs} size="3x" className="text-yellow-500"/>
                <p className="mt-2 text-lg font-medium">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faHtml5} size="3x" className="text-orange-500"/>
                <p className="mt-2 text-lg font-medium">HTML5</p>
            </div>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-blue-500"/>
                <p className="mt-2 text-lg font-medium">CSS3</p>
            </div>
            {/*<div className="flex flex-col items-center">*/}
            {/*    <FontAwesomeIcon icon={faDatabase} size="3x" className="text-gray-500" />*/}
            {/*    <p className="mt-2 text-lg font-medium">Databases</p>*/}
            {/*</div>*/}
            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faMobileAlt} size="3x" className="text-purple-500"/>
                <p className="mt-2 text-lg font-medium">Mobile Development</p>
            </div>
        </div>
)

}

export default Skills;
