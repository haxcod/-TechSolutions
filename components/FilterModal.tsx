'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, Filter, Grid, List } from 'lucide-react'
import { useState } from 'react'

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
}

const categories = ['All', 'Web Development', 'Mobile Development', 'Cloud Solutions', 'Custom Software']

export function FilterModal({ 
  isOpen, 
  onClose, 
  selectedCategory, 
  onCategoryChange, 
  viewMode, 
  onViewModeChange 
}: FilterModalProps) {
  const [tempCategory, setTempCategory] = useState(selectedCategory)
  const [tempViewMode, setTempViewMode] = useState(viewMode)

  const handleApplyFilters = () => {
    onCategoryChange(tempCategory)
    onViewModeChange(tempViewMode)
    onClose()
  }

  const handleReset = () => {
    setTempCategory('All')
    setTempViewMode('grid')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Filter Projects
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Category Filters */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Category
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={tempCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTempCategory(category)}
                      className={`justify-start text-sm ${
                        tempCategory === category
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* View Mode */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  View Mode
                </h3>
                <div className="flex space-x-2">
                  <Button
                    variant={tempViewMode === 'grid' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTempViewMode('grid')}
                    className={`flex-1 ${
                      tempViewMode === 'grid'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <Grid className="w-4 h-4 mr-2" />
                    Grid
                  </Button>
                  <Button
                    variant={tempViewMode === 'list' ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTempViewMode('list')}
                    className={`flex-1 ${
                      tempViewMode === 'list'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <List className="w-4 h-4 mr-2" />
                    List
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="flex-1"
                >
                  Reset
                </Button>
                <Button
                  onClick={handleApplyFilters}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}