import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, Users, BookOpen, Star, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import tutoringImage from '../assets/GD87gn7jrSJK.jpg'
import classroomImage from '../assets/GD87gn7jrSJK.jpg'

const AboutPage = () => {
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
              Meet Your Child's New Favourite Teacher
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient italic">Lucy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A passionate, fully-qualified primary teacher turned private tutor, 
              dedicated to helping every child discover their potential and love of learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold">
                From Classroom to <span className="text-primary italic">Therapeutic Teaching</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Looking for a fully qualified, nurturing tutor to support your child's learning? 
                I'm Lucy — a former primary teacher turned private tutor — passionate about helping your child flourish.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                After years in the classroom, I saw firsthand how challenging it was to meet every child's 
                individual needs within a class of 30. That's why I created The Therapeutic Teacher — 
                to provide the personalised support that helps each child thrive.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's building confidence, filling learning gaps, or preparing for assessments, 
                I'm here to help your child succeed in a warm, supportive environment where they can 
                truly be themselves.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button className="btn-primary">
                    Book a Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/process">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    How I Work
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={tutoringImage} 
                  alt="Lucy tutoring a child" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Achievement */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-accent" />
                  <div>
                    <div className="font-bold text-foreground">Qualified Teacher</div>
                    <div className="text-sm text-muted-foreground">Primary Education</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              My Teaching Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every child is unique, and their learning journey should be too. 
              I believe in creating a space where children feel safe to explore, make mistakes, and grow.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Nurturing Environment',
                description: 'Creating a safe, supportive space where children feel valued and understood, allowing them to take risks in their learning.'
              },
              {
                icon: Users,
                title: 'Individual Focus',
                description: 'Recognising that every child learns differently and adapting my approach to match their unique strengths and needs.'
              },
              {
                icon: BookOpen,
                title: 'Love of Learning',
                description: 'Fostering curiosity and enthusiasm for learning that will serve children throughout their educational journey and beyond.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-8 text-center">
                    <div className="service-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications & Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold">
                Qualifications & <span className="text-primary italic">Experience</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Qualified Primary Teacher</h3>
                    <p className="text-muted-foreground">
                      Fully qualified with years of classroom experience teaching primary-aged children 
                      across all key stages.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Classroom Experience</h3>
                    <p className="text-muted-foreground">
                      Extensive experience managing classes of 30+ children, understanding diverse 
                      learning needs and adapting teaching methods accordingly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Therapeutic Approach</h3>
                    <p className="text-muted-foreground">
                      Specialised training in creating therapeutic learning environments that support 
                      children's emotional and academic development.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={classroomImage} 
                  alt="Therapeutic classroom environment" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Teaching Experience</div>
              </div>
              <div className="absolute bottom-6 right-6 text-white">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm">Children Supported</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial from Colleague */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              What Colleagues Say
            </h2>
            
            <Card className="testimonial-card">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-muted-foreground mb-8 italic leading-relaxed">
                  "You will not find a more dedicated, gifted educator to tutor your children. 
                  She was able to get the absolute best out of her classes of 30 (sparking a love of learning, too) each year. 
                  Imagine the impact she can have on your child in a 1:1 or small group situation. 
                  I would 100% recommend. Your child will learn and flourish with a smile on their face!"
                </blockquote>
                <div className="font-semibold text-foreground">Former Teaching Colleague</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Questions Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Key Questions
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">WHO</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm Lucy, a former primary teacher turned private tutor, passionate about 
                    personalised, creative and holistic education that enables children to flourish.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">WHAT</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I offer small group sessions (maximum 4 pupils) during term-time and one-to-one 
                    tutoring in the holidays, with weekly post-session feedback for parents.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">WHEN</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Small group sessions take place Monday-Friday from 4-5pm and 5:30-6:30pm. 
                    One-to-one sessions are offered in school holidays between 9:30am-4:30pm.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">WHERE</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sessions are held in my home-based therapeutic classroom—a comfortable, 
                    calm space designed to nurture both well-being and learning (located in HP10).
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">WHY</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Children flourish with personalised attention—and that's the foundation of my 
                    business. I provide what schools, despite their best intentions, simply cannot.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">HOW</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sessions are tailored to target children's unique learning gaps, misconceptions 
                    and personal preferences, making the experience both effective and engaging.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Child's Learning Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to help your child discover their potential and develop a lifelong love of learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-primary text-lg px-8">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default AboutPage

