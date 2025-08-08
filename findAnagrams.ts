function findAnagrams(s: string, p: string): number[] {
    let window:any = {};
    let need:any = {};
    for(const char of p){
        need[char] =(need[char] || 0) +1;
    }

    let left = 0;
    let right = 0;
    let valid = 0;
    let result:number[] = [];
    while(right < s.length){
        let addChar = s[right];
        right++;
        if(need[addChar]){
            window[addChar] = (window[addChar] || 0) + 1;
            if(need[addChar]===window[addChar]){
                valid++;
            }
        }

        while(valid=== Object.keys(need).length){
            if((right-left) === p.length){
                result.push(left);
            }
            console.log('left', left);
            let deleteChar = s[left];
            left++;
            if(need[deleteChar]){
                if(need[deleteChar]=== window[deleteChar]){
                    valid--;
                }
                window[deleteChar]--;
            }
        }

    }
    console.log('result', result);
    return result;
};

findAnagrams("cbaebabacd","abc");