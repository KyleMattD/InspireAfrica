import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    //new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),

    new Menu (30, 'Farm', null, null, 'house', null, true, 0),
    new Menu (1, 'Farm', '/farm', null, 'house', null, false, 30),
   
     
    new Menu (31, 'Section', null, null, 'local_florist', null, true, 30),
    new Menu (32, 'Staff Management', null, null, 'groups', null, true, 0),
    new Menu (33, 'Vehicles', null, null, 'time_to_leave', null, true, 0),
    new Menu (21, 'Farm Tasks', '/task', null, 'edit_attributes', null, false, 0), 
    new Menu (15, 'Section', '/section', null, 'local_florist', null, false, 31), 
    new Menu (3, 'Infrastructure', '/infrastructure', null, 'home', null, false, 30),
    new Menu (7, 'Equipment', '/equipment', null, 'gavel', null, false, 30), 
    new Menu (2, 'Farm Health', '/health', null, 'healing', null, false, 30),
    

    
    new Menu (4, 'Vehicles', '/vehicles', null, 'airline_seat_recline_normal', null, false, 33),
    new Menu (5, 'Vehicle Service', '/service', null, 'build', null, false, 33), 
    new Menu (6, 'Repair Log', '/repairlog', null, 'calendar_view_day', null, false, 33), 

   // new Menu (2, 'Staff', '/users', null, 'supervisor_account', null, false, 0), 
   new Menu (36, 'Scheduling', null, null, 'calendar_today', null, true, 0),
    new Menu (8, 'Task Scheduling', '/schedule', null, 'calendar_today', null, false, 36), 
    new Menu (16, 'Section Type', '/sec-type', null, 'healing', null, false, 31), 


    new Menu (34, 'Faults', null, null, 'highlight_off', null, true, 0),
    new Menu (10, 'Farm Faults', '/fault-log', null, 'highlight_off', null, false, 34), 
    new Menu (13, 'Fault Report', '/report', null, 'sort', null, false, 34), 
    // new Menu (11, 'Fm main', '/fm-main', null, 'healing', null, false, 0), 

    new Menu (35, 'Maintenance', null, null, 'build', null, true, 0),
    new Menu (12, 'Maintenance', '/maintenance', null, 'healing', null, false, 35), 
    new Menu (12, 'Maintenance Report', '/maintenance-report', null, 'sort', null, false, 35), 

    new Menu (9, 'Active List', '/active-list', null, 'list', null, false, 0), 
    new Menu (14, 'Section Report', '/sec-report', null, 'healing', null, false, 31),  


    new Menu (17, 'Service Providers', '/sr-prov', null, 'perm_identity', null, false, 33), 

 



    // new Menu (22, 'Task-Type', '/task-type', null, 'healing', null, false, 0), 

    new Menu (2, 'Staff Members', '/users', null, 'emoji_people', null, false, 32), 
    new Menu (20, 'Staff Skills', '/skill', null, 'insert_emoticon', null, false, 32), 
    new Menu (19, 'Checked in Staff', '/staff', null, 'check', null, false, 32), 
    new Menu (18, 'Audit Report', '/audit-log', null, 'view_list', null, false, 0), 
    new Menu (1, 'Insurance Providers', '/insure', null, 'business', null, false, 0),
    new Menu (18, 'About Us', '/about', null, 'spa', null, false, 0), 
    new Menu (21, 'Help', '/helper', null, 'help', null, false, 0), 
    /* new Menu (3, 'UI Features', null, null, 'computer', null, true, 0),   
    new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),  
    new Menu (5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), 
    new Menu (6, 'Lists', '/ui/lists', null, 'list', null, false, 3), 
    new Menu (7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), 
    new Menu (8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), 
    new Menu (9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3),
    new Menu (10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    new Menu (11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), 
    new Menu (12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), 
    new Menu (13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), 
    new Menu (14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3), 
    new Menu (15, 'Dynamic Menu', '/dynamic-menu', null, 'format_list_bulleted', null, false, 0),    
    
   
    new Menu (20, 'Form Controls', null, null, 'dvr', null, true, 0), 
    new Menu (21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), 
    new Menu (22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), 
    new Menu (23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), 
    new Menu (24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), 
    new Menu (25, 'Input', '/form-controls/input', null, 'input', null, false, 20), 
    new Menu (26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), 
    new Menu (27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), 
    new Menu (28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), 
    new Menu (29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20), 
    new Menu (30, 'Tables', null, null, 'view_module', null, true, 0),
    new Menu (31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), 
    new Menu (32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), 
    new Menu (33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    new Menu (34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    new Menu (35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
    new Menu (36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), 
    new Menu (40, 'Pages', null, null, 'library_books', null, true, 0),
    new Menu (43, 'Login', '/login', null, 'exit_to_app', null, false, 40),    
    new Menu (44, 'Register', '/register', null, 'person_add', null, false, 40),
    new Menu (45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    new Menu (46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    new Menu (47, 'Error', '/error', null, 'warning', null, false, 40),
    new Menu (48, 'Landing', '/landing', null, 'filter', null, false, 40),
    new Menu (49, 'Profile', null, null, 'person', null, true, 40),
    new Menu (50, 'Projects', '/profile/projects', null, 'note', null, false, 49),    
    new Menu (51, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 49),
    
    new Menu (70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    new Menu (71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    new Menu (72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    new Menu (73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    new Menu (74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70), 
    new Menu (81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 0),  
    new Menu (85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 0),  
    new Menu (140, 'Level 1', null, null, 'more_horiz', null, true, 0),
    new Menu (141, 'Level 2', null, null, 'folder_open', null, true, 140),
    new Menu (142, 'Level 3', null, null, 'folder_open', null, true, 141),
    new Menu (143, 'Level 4', null, null, 'folder_open', null, true, 142),
    new Menu (144, 'Level 5', null, 'http://themeseason.com', 'link', null, false, 143),
    new Menu (200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0)
    */
]

export const horizontalMenuItems = [ 
    new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new Menu (2, 'Users', '/users', null, 'supervisor_account', null, false, 0), 
    new Menu (3, 'UI Features', null, null, 'computer', null, true, 0),   
    new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),  
    new Menu (5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), 
    new Menu (6, 'Lists', '/ui/lists', null, 'list', null, false, 3), 
    new Menu (7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), 
    new Menu (8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), 
    new Menu (9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3), 
    new Menu (10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    new Menu (11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), 
    new Menu (12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), 
    new Menu (13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), 
    new Menu (14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
   
    new Menu (20, 'Form Controls', null, null, 'dvr', null, true, 0), 
    new Menu (21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), 
    new Menu (22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), 
    new Menu (23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), 
    new Menu (24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), 
    new Menu (25, 'Input', '/form-controls/input', null, 'input', null, false, 20), 
    new Menu (26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), 
    new Menu (27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), 
    new Menu (28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), 
    new Menu (29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),    
    new Menu (30, 'Tables', null, null, 'view_module', null, true, 0),
    new Menu (31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), 
    new Menu (32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), 
    new Menu (33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    new Menu (34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    new Menu (35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
    new Menu (36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), 
    new Menu (70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    new Menu (71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    new Menu (72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    new Menu (73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    new Menu (74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70), 
  
    new Menu (81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3), 
    new Menu (85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3),
    new Menu (40, 'Pages', null, null, 'library_books', null, true, 0),
    new Menu (43, 'Login', '/login', null, 'exit_to_app', null, false, 40),    
    new Menu (44, 'Register', '/register', null, 'person_add', null, false, 40),
    new Menu (45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    new Menu (46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    new Menu (47, 'Error', '/error', null, 'warning', null, false, 40),
    new Menu (48, 'Landing', '/landing', null, 'filter', null, false, 40),
    new Menu (49, 'Profile', null, null, 'person', null, true, 40),
    new Menu (50, 'Projects', '/profile/projects', null, 'note', null, false, 49),    
    new Menu (51, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 49),
  
    new Menu (200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 40)
]