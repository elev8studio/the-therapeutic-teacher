import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, BookOpen, Home, Clock, Star, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ServicesPage = () => {
  const services = [
    {
      icon: BookOpen,
      title: '1:1 Tutoring',
      description: 'Personalised one-on-one sessions tailored to your child\'s specific learning needs and pace.',
      features: [
        'Individual attention and focus',
        'Customised curriculum and materials',
        'Flexible scheduling to suit your family',
        'Regular progress assessments',
        'Detailed feedback and reports'
      ],
      ideal: 'Perfect for children who need extra support, have specific learning goals, or prefer individual attention.',
      duration: '1 hour sessions',
      frequency: 'Weekly or bi-weekly'
    },
    {
      icon: Users,
      title: 'Small Group Sessions',
      description: 'Interactive group sessions with maximum 4 children, fostering collaborative learning and social skills.',
      features: [
        'Maximum 4 children per group',
        'Peer learning and interaction',
        'Cost-effective option',
        'Social skills development',
        'Collaborative problem-solving'
      ],
      ideal: 'Great for children who enjoy learning with others and benefit from peer interaction.',
      duration: '1.5 hour sessions',
      frequency: 'Weekly sessions'
    },
    {
      icon: Home,
      title: 'Home Education Support',
      description: 'Comprehensive support for home-educated learners across KS1 and KS2 in my therapeutic classroom.',
      features: [
        'Daytime sessions available',
        'Curriculum planning support',
        'Resource recommendations',
        'Progress tracking',
        'Socialisation opportunities'
      ],
      ideal: 'Designed for home-educating families who want professional teaching support.',
      duration: '2-3 hour sessions',
      frequency: 'Flexible scheduling'
    }
  ]

  const subjects = [
    { name: 'English & Literacy', description: 'Reading, writing, grammar, and comprehension' },
    { name: 'Mathematics', description: 'Number work, problem-solving, and mathematical reasoning' },
    { name: 'Science', description: 'Exploration and understanding of the natural world' },
    { name: 'Creative Writing', description: 'Developing imagination and storytelling skills' },
    { name: 'Phonics', description: 'Building strong foundations for reading and spelling' },
    { name: 'Study Skills', description: 'Learning how to learn effectively and independently' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-accent-foreground text-sm font-medium mb-6 badge-text">
              <Sparkles className="w-4 h-4 mr-2" />
              Flexible Learning Options
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Tutoring <span className="text-gradient italic">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every session is designed to be interactive, supportive, and tailored to your child's unique needs. 
              Choose the option that works best for your family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="service-icon w-16 h-16 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Ideal for:</strong> {service.ideal}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>{service.frequency}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="hover-lift">
                    <CardContent className="p-8">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-6">
                        <service.icon className="w-16 h-16 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Link to="/contact">
                        <Button className="btn-primary w-full">
                          Book This Service
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Covered */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Subjects & Areas Covered
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I provide comprehensive support across all primary curriculum areas, 
              adapting to your child's specific needs and interests.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{subject.name}</h3>
                    <p className="text-muted-foreground text-sm">{subject.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Age Groups & Key Stages
            </h2>
            <p className="text-xl text-muted-foreground">
              Supporting children throughout their primary education journey
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Key Stage 1 (Ages 5-7)',
                description: 'Foundation skills in reading, writing, and numeracy with a focus on building confidence and love of learning.',
                features: ['Phonics and early reading', 'Number recognition and counting', 'Creative writing beginnings', 'Science exploration']
              },
              {
                title: 'Key Stage 2 (Ages 7-11)',
                description: 'Advanced primary skills preparation for secondary school with comprehensive curriculum coverage.',
                features: ['Advanced literacy skills', 'Mathematical reasoning', 'Science investigations', 'Exam preparation']
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{stage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{stage.description}</p>
                    <div className="space-y-2">
                      {stage.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Choose the Right Service?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Not sure which option is best for your child? Let's discuss their needs and find the perfect fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/process">
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                  How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default ServicesPage

