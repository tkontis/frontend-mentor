import { FC } from 'react';
import Section from '@mentor/recipe/components/Section';
import Title from '@mentor/recipe/components/Title';
import List from '@mentor/recipe/components/List';
import Item from '@mentor/recipe/components/Item';
import Text from '@mentor/recipe/components/Text';
import Table from '@mentor/recipe/components/Table';

const App: FC = () => {
    const preparationTime = [
        <Item title="Total">Approximately 10 minutes</Item>,
        <Item title="Preparation">5 minutes</Item>,
        <Item title="Cooking">5 minutes</Item>,
    ];

    const ingredients = [
        <Item>2-3 large eggs</Item>,
        <Item>Salt, to taste</Item>,
        <Item>Pepper, to taste</Item>,
        <Item>1 tablespoon of butter or oil</Item>,
        <Item>Optional fillings: cheese, diced vegetables, cooked meats, herbs</Item>,
    ];

    const instructions = [
        <Item title="Beat the eggs">
            In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You
            can add a tablespoon of water or milk for a fluffier texture.
        </Item>,
        <Item title="Heat the pan">
            Place a non-stick frying pan over medium heat and add butter or oil.
        </Item>,
        <Item title="Cook the omelette">
            Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the
            eggs evenly coat the surface.
        </Item>,
        <Item title="Add fillings (optional)">
            When the eggs begin to set at the edges but are still slightly runny in the middle,
            sprinkle your chosen fillings over one half of the omelette.
        </Item>,
        <Item title="Fold and serve">
            As the omelette continues to cook, carefully lift one edge and fold it over the
            fillings. Let it cook for another minute, then slide it onto a plate.
        </Item>,
        <Item title="Enjoy">Serve hot, with additional salt and pepper if needed.</Item>,
    ];

    return (
        <>
            <img alt="main page image" className="rounded" src="assets/image-omelette.jpeg" />

            <Title main>Simple Omelette Recipe</Title>

            <Text>
                An easy and quick dish, perfect for any meal. This classic omelette combines beaten
                eggs cooked to perfection, optionally filled with your choice of cheese, vegetables,
                or meats.
            </Text>

            <Section title="Preparation time" highlighted>
                <List items={preparationTime} />
            </Section>

            <Section title="Ingredients">
                <List items={ingredients} />
            </Section>

            <Section title="Instructions">
                <List numeric items={instructions} />
            </Section>

            <Section title="Nutrition">
                <Text>
                    The table below shows nutritional values per serving without the additional
                    fillings.
                </Text>

                <Table
                    rows={[
                        ['calories', '277kcal'],
                        ['carbs', '0g'],
                        ['protein', '20g'],
                        ['fat', '22g'],
                    ]}
                />
            </Section>
        </>
    );
};

export default App;
