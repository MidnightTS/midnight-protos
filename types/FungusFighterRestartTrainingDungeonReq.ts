// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FungusFighterRestartTrainingDungeonReq.proto" (syntax proto3)
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
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 24273;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message FungusFighterRestartTrainingDungeonReq
 */
export interface FungusFighterRestartTrainingDungeonReq {
}
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterRestartTrainingDungeonReq$Type extends MessageType<FungusFighterRestartTrainingDungeonReq> {
    constructor() {
        super("FungusFighterRestartTrainingDungeonReq", []);
    }
    create(value?: PartialMessage<FungusFighterRestartTrainingDungeonReq>): FungusFighterRestartTrainingDungeonReq {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FungusFighterRestartTrainingDungeonReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FungusFighterRestartTrainingDungeonReq): FungusFighterRestartTrainingDungeonReq {
        return target ?? this.create();
    }
    internalBinaryWrite(message: FungusFighterRestartTrainingDungeonReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusFighterRestartTrainingDungeonReq
 */
export const FungusFighterRestartTrainingDungeonReq = new FungusFighterRestartTrainingDungeonReq$Type();
