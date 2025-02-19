import PropTypes from 'prop-types';


export default function Book({ title, author }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {author}
      </p>
    </div>
  )

}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

