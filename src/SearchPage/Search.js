import SplitPane from './SplitPane';
import Filter from './Filter';
import Results from './Results';
import SearchRow from './SearchRow';
import './Search.css';

export default function Search(){
    return(
        <div className = "m-5">
            <div className = "my-4">
                <SearchRow/>
            </div>
            <div className = "maxWidth">
                <SplitPane left = {<Filter/>} right = {<Results/>}/>
            </div>
            
        </div>
    );
}