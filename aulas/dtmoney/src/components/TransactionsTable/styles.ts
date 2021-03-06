import styled from 'styled-components';

export const Container = styled.div`
    margin-top:4rem;
    table{
        width:100%;
        border-spacing: 0 0.5rem
    }

    th{
        color: var(--text-body);
        font-weight: 400;
        font-size: 1rem;

        text-align:left;
        padding: 1rem 2rem;
        line-height: 1.5rem;
    }
    
    td{
        color: var(--text-body);
        background: var(--shape);

        padding: 1rem 2rem;
        border: 0;
        border-radius: 0.25rem;

        &:first-child{
            color: var(--text-title);
        }

        &.deposit{
            color: var(--green);
        }

        &.withdraw{
            color: var(--red);
        }
    }
`;
