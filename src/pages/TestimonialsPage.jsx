import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Quote, Heart, Users, BookOpen, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "You will not find a more dedicated, gifted educator to tutor your children. She was able to get the absolute best out of her classes of 30 (sparking a love of learning, too) each year. Imagine the impact she can have on your child in a 1:1 or small group situation. I would 100% recommend. Your child will learn and flourish with a smile on their face!",
      author: "Former Teaching Colleague",
      role: "Primary School Teacher",
      rating: 5,
      category: "Professional Recommendation"
    },
    {
      quote: "Lucy has transformed my daughter's confidence in mathematics. What used to be tears and frustration is now excitement and pride. The personalised approach really works!",
      author: "Sarah M.",
      role: "Parent of Year 3 Student",
      rating: 5,
      category: "Parent Feedback"
    },
    {
      quote: "The therapeutic classroom environment is exactly what my son needed. He feels safe to make mistakes and ask questions without judgment. His reading has improved dramatically.",
      author: "James T.",
      role: "Parent of Year 2 Student",
      rating: 5,
      category: "Parent Feedback"
    },
    {
      quote: "As a home-educating family, Lucy's support has been invaluable. She provides the professional expertise we needed while respecting our family's approach to learning.",
      author: "Emma K.",
      role: "Home-Educating Parent",
      rating: 5,
      category: "Home Education"
    },
    {
      quote: "My daughter actually looks forward to her tutoring sessions! Lucy makes learning fun and engaging while still maintaining high standards. The progress reports are detailed and helpful.",
      author: "Michael R.",
      role: "Parent of Year 4 Student",
      rating: 5,
      category: "Parent Feedback"
    },
    {
      quote: "The small group sessions have been perfect for my twins. They enjoy learning together with other children while still getting individual attention. Highly recommended!",
      author: "Lisa H.",
      role: "Parent of Year 1 Twins",
      rating: 5,
      category: "Small Group Sessions"
    }
  ]

  const successStories = [
    {
      icon: BookOpen,
      title: "Reading Breakthrough",
      story: "A Year 2 student who was struggling with reading confidence made 18 months of progress in just 6 months of 1:1 sessions.",
      outcome: "Now reading above age level and loves books"
    },
    {
      icon: Heart,
      title: "Confidence Building",
      story: "A shy Year 3 student who was afraid to speak up in class found their voice through small group sessions.",
      outcome: "Now actively participates and helps other children"
    },
    {
      icon: Users,
      title: "Social Skills Development",
      story: "A home-educated child developed crucial social skills and friendships through group sessions.",
      outcome: "Successfully transitioned to mainstream school"
    }
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
              Real Stories, Real Results
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              What Families <span className="text-gradient italic">Say</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Don't just take my word for it. Here's what parents, colleagues, and children 
              have to say about their experience with The Therapeutic Teacher.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="testimonial-card relative overflow-hidden">
              <CardContent className="p-12 text-center">
                <Quote className="w-16 h-16 text-accent mx-auto mb-6 opacity-20" />
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-2xl lg:text-3xl text-muted-foreground mb-8 italic leading-relaxed">
                  "You will not find a more dedicated, gifted educator to tutor your children. 
                  Your child will learn and flourish with a smile on their face!"
                </blockquote>
                <div className="font-semibold text-foreground text-lg">Former Teaching Colleague</div>
                <div className="text-muted-foreground">Primary School Teacher</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
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
              Parent & Professional Reviews
            </h2>
            <p className="text-xl text-muted-foreground">
              Honest feedback from families who have experienced the difference
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {testimonial.category}
                      </span>
                    </div>
                    <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real examples of how personalised tutoring has transformed children's learning journeys
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
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
                      <story.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{story.story}</p>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm font-medium text-primary">{story.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-primary-foreground/80">
              The numbers behind the success stories
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '100%', label: 'Parent Satisfaction Rate' },
              { number: '95%', label: 'Children Show Improved Confidence' },
              { number: '18', label: 'Average Months Progress in 6 Months' },
              { number: '5+', label: 'Years Teaching Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes the Difference */}
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
              What Makes the Difference?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The key factors that consistently lead to positive outcomes for children
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Individual Attention', description: 'Every child gets the focus they deserve' },
              { title: 'Therapeutic Environment', description: 'Safe space to learn and grow' },
              { title: 'Qualified Expertise', description: 'Professional teaching experience' },
              { title: 'Personalised Approach', description: 'Tailored to each child\'s needs' }
            ].map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-3">{factor.title}</h3>
                    <p className="text-muted-foreground text-sm">{factor.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the families who have already discovered the difference that personalised, 
              caring tutoring can make to their child's learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-primary text-lg px-8">
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/process">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
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

export default TestimonialsPage

