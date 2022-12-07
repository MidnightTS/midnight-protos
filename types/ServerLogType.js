"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerLogType = void 0;
// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ServerLogType.proto" (syntax proto3)
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
 * @generated from protobuf enum ServerLogType
 */
var ServerLogType;
(function (ServerLogType) {
    /**
     * @generated from protobuf enum value: SERVER_LOG_TYPE_NONE = 0;
     */
    ServerLogType[ServerLogType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: SERVER_LOG_TYPE_ABILITY = 1;
     */
    ServerLogType[ServerLogType["ABILITY"] = 1] = "ABILITY";
    /**
     * @generated from protobuf enum value: SERVER_LOG_TYPE_LEVEL = 2;
     */
    ServerLogType[ServerLogType["LEVEL"] = 2] = "LEVEL";
    /**
     * @generated from protobuf enum value: SERVER_LOG_TYPE_ENTITY = 3;
     */
    ServerLogType[ServerLogType["ENTITY"] = 3] = "ENTITY";
    /**
     * @generated from protobuf enum value: SERVER_LOG_TYPE_LUA = 4;
     */
    ServerLogType[ServerLogType["LUA"] = 4] = "LUA";
})(ServerLogType = exports.ServerLogType || (exports.ServerLogType = {}));
