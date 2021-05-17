import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Mary"
                    timeAgo="Today at 4:45PM"
                    avatar={faker.image.avatar()}
                    text="Woohoo!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 2:00PM"
                    avatar={faker.image.avatar()}
                    text="React is easy"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Lexi"
                    timeAgo="Yesterday at 6:00PM"
                    avatar={faker.image.avatar()}
                    text="Too ez!"
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));