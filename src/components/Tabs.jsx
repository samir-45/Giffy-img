import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ['photos', 'videos'];
    // Added state to track the active tab
    // const [activeTab, setActiveTab] = useState('photos'); 

    const dispatch = useDispatch()

    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div className="flex gap-6 p-10 min-h-[30vh] font-sans items-center justify-center">
            {tabs.map(function(elem, idx) {
                const isActive = activeTab === elem;
                
                return (
                    <button 
                        key={idx}
                        onClick={() => dispatch(setActiveTabs(elem))}
                        className={`
                            px-8 py-3 text-lg text-black font-bold uppercase tracking-wider border-[3px] border-black transition-all cursor-pointer
                            ${isActive 
                                /* Active State: Pressed down, purple, no shadow */
                                ? 'bg-[#c4b5fd] translate-x-1.5 translate-y-1.5 shadow-none' 
                                
                                /* Inactive State: Popped up, white, hard black shadow */
                                : 'bg-red-200 shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#000000]'
                            }
                        `}
                    >
                        {elem}
                    </button>
                );
            })}
        </div>
    );
}

export default Tabs;