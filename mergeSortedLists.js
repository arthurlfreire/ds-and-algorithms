function mergeSortedLists(list1, list2) {
    if (list1 == null)
        return list2
     if (list2 == null)
         return list1
 
     if (list1.val < list2.val)
     {
        list1.next = mergeSortedLists(list1.next, list2)
         return list1
     }
     else
     {
        list2.next = mergeSortedLists(list1, list2.next)
         return list2
     }
}

console.log(mergeSortedLists([1, 2, 4, 8], [3, 5, 6, 7]))