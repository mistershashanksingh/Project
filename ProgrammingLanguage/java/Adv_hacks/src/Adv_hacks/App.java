package Adv_hacks;
interface App{
    static String cap(String name){
        var first = Character.toUpperCase(name.charAt(3));
        var rem = name.substring(0,3);
        return rem + first;
    }
    
    static void main(String[] args) {
        System.out.println(cap("duke"));
    }
}