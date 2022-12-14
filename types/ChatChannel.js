"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatChannel = void 0;
// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ChatChannel.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
/**
 * @generated from protobuf enum ChatChannel
 */
var ChatChannel;
(function (ChatChannel) {
    /**
     * @generated from protobuf enum value: CHAT_CHANNEL_TEAM = 0;
     */
    ChatChannel[ChatChannel["TEAM"] = 0] = "TEAM";
    /**
     * @generated from protobuf enum value: CHAT_CHANNEL_FRIEND = 1;
     */
    ChatChannel[ChatChannel["FRIEND"] = 1] = "FRIEND";
    /**
     * @generated from protobuf enum value: CHAT_CHANNEL_NONE = 2;
     */
    ChatChannel[ChatChannel["NONE"] = 2] = "NONE";
    /**
     * @generated from protobuf enum value: CHAT_CHANNEL_HIDEANDSEEK = 3;
     */
    ChatChannel[ChatChannel["HIDEANDSEEK"] = 3] = "HIDEANDSEEK";
    /**
     * @generated from protobuf enum value: CHAT_CHANNEL_HIDEANDSEEK_TEAM = 5;
     */
    ChatChannel[ChatChannel["HIDEANDSEEK_TEAM"] = 5] = "HIDEANDSEEK_TEAM";
    /**
     * @generated from protobuf enum value: CHAT_CHANNEL_ALL = 10;
     */
    ChatChannel[ChatChannel["ALL"] = 10] = "ALL";
    /**
     * @generated from protobuf enum value: CHAT_CHANNEL_TEST = 100;
     */
    ChatChannel[ChatChannel["TEST"] = 100] = "TEST";
})(ChatChannel = exports.ChatChannel || (exports.ChatChannel = {}));
