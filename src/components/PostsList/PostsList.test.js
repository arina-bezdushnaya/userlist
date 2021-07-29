import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PostsList } from './PostsList';

const data = [
  {id: "1", body: "This is one comment", userId: "9", title: "This is one comment" }
];

describe('PostsList component', () => {
  it('PostsList renders with mock data', () => {
    render(<PostsList postslist={data}/>);
    expect(screen.queryByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/id/)).toBeInTheDocument();
  });

  it('renders button', () => {
    render(<PostsList postslist={data}/>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('PostsList snapshot', () => {
    const postslist = render(<PostsList postslist={data}/>);
    expect(postslist).toMatchSnapshot();
  });


});
