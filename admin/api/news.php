<?php
require_once 'config.php';

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in'])) {
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        // Fetch news
        $sql = "SELECT * FROM news ORDER BY date DESC";
        $result = $conn->query($sql);
        $news = [];
        
        while ($row = $result->fetch_assoc()) {
            $news[] = $row;
        }
        
        echo json_encode(['success' => true, 'data' => $news]);
        break;
        
    case 'POST':
        // Add new news
        $data = json_decode(file_get_contents('php://input'), true);
        
        $title = $conn->real_escape_string($data['title']);
        $content = $conn->real_escape_string($data['content']);
        $date = $conn->real_escape_string($data['date']);
        
        $sql = "INSERT INTO news (title, content, date) VALUES ('$title', '$content', '$date')";
        
        if ($conn->query($sql)) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => $conn->error]);
        }
        break;
        
    case 'PUT':
        // Update news
        $data = json_decode(file_get_contents('php://input'), true);
        
        $id = $conn->real_escape_string($data['id']);
        $title = $conn->real_escape_string($data['title']);
        $content = $conn->real_escape_string($data['content']);
        $date = $conn->real_escape_string($data['date']);
        
        $sql = "UPDATE news SET title='$title', content='$content', date='$date' WHERE id=$id";
        
        if ($conn->query($sql)) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => $conn->error]);
        }
        break;
        
    case 'DELETE':
        // Delete news
        $id = $conn->real_escape_string($_GET['id']);
        
        $sql = "DELETE FROM news WHERE id=$id";
        
        if ($conn->query($sql)) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => $conn->error]);
        }
        break;
}
?> 