export default function BoulderGradeSelect({ onGradeChange }) {
  const handleGradeChange = (event) => {
    onGradeChange(event.target.value); // Pass grade to parent
  };
  return (
    <select
      name="grade"
      id=""
      onChange={handleGradeChange}
      className="bg-[#181a1c] rounded text-gray-400 p-1"
    >
      <option value="vb">VB</option>
      <option value="v1">V1</option>
      <option value="v2">V2</option>
      <option value="v3">V3</option>
      <option value="v4">V4</option>
      <option value="v5">V5</option>
      <option value="v6">V6</option>
      <option value="v7">V7</option>
      <option value="v8">V8</option>
      <option value="v9">V9</option>
      <option value="v10">V10</option>
    </select>
  );
}
