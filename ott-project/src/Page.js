import styled from 'styled-components';

function Page() {
    return (
        <main>
            <article>
                <PageP>원하는 분류를 선택하세요.</PageP>
            </article>
        </main>
    )
}

export default Page;

// styled-components
const PageP = styled.p`
    font-size: 60px;
    font-weight: bold;

    position: absolute;

    left: 40%;
    bottom: 50%;
`;