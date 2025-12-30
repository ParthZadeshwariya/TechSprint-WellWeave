
const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About WellWeave</h2>
                <div className="prose prose-lg mx-auto text-muted-foreground text-gray-600">
                    <p className="mb-6 text-gray-600">
                        WellWeave AI was born from a simple idea: that visualizing our inner thoughts can help us understand them better.
                        By combining advanced AI analysis with interactive 3D graphs, we provide a unique mirror to your mind.
                    </p>
                    <p className="text-gray-600">
                        Our mission is to make mental wellness accessible, engaging, and deeply personal. Whether you're journaling
                        through a difficult day or celebrating a moment of joy, WellWeave helps you weave together the threads of your life.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
