import SplitPane from './SplitPane';
import Filter from './Filter';
import Results from './Results';
import SearchRow from './SearchRow';


export default function Search(){
    return(
        <div className = "m-5">
            <div className = "my-4">
                <SearchRow/>
            </div>
            
            <SplitPane left = {<Filter/>} right = {<Results/>}/>
        </div>
    );
}