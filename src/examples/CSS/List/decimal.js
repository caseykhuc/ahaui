<>
  <p>{Faker.lorem.sentences()}</p>
  <ol className="u-paddingLeftNone u-listStylePositionInside">
    {[1, 2, 3, 4].map(item => (
      <li key={item}>{Faker.lorem.sentence()}</li>
    ))}
  </ol>
</>;
