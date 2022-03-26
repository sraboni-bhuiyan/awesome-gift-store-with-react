import React from 'react';

const QuesAnswer = () => {
    return (
        <div>
            <h4>(1) Props Vs State</h4>
            <p>- Props passes data from one component to other components as an argument. whereas State holds information about the components</p>
            <p>- Props are read-only components. On the other hand, State can chnage over time and can be asynchronous.</p>
            <p>- Props can be used by stateless component, but stateless components cnnot have State.</p>
            <p>- Props can be used by child components, but State cannot do that.</p>
            <p>- Props are immutable, but State is mutable.</p>
            <h4>(2) How useState works ?</h4>
            <p>- useState() is a React hook, that can be imported from the react package. It allows us to add state to our functional components. Hooks make possible to use state and mutability inside function components. We can't use hooks inside classes. So, we can wrap our class component with a function and use hooks from it. Hooks migrate components from class to function form.</p>
        </div>
    );
};

export default QuesAnswer;