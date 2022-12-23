// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SingleStartBrickBreakerRsp.proto" (syntax proto3)
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
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 20712;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message SingleStartBrickBreakerRsp
 */
export interface SingleStartBrickBreakerRsp {
    /**
     * @generated from protobuf field: uint32 level_id = 10;
     */
    levelId: number;
    /**
     * @generated from protobuf field: bool is_dungeon = 9;
     */
    isDungeon: boolean;
    /**
     * @generated from protobuf field: int32 retcode = 8;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SingleStartBrickBreakerRsp$Type extends MessageType<SingleStartBrickBreakerRsp> {
    constructor() {
        super("SingleStartBrickBreakerRsp", [
            { no: 10, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<SingleStartBrickBreakerRsp>): SingleStartBrickBreakerRsp {
        const message = { levelId: 0, isDungeon: false, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SingleStartBrickBreakerRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SingleStartBrickBreakerRsp): SingleStartBrickBreakerRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 level_id */ 10:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_dungeon */ 9:
                    message.isDungeon = reader.bool();
                    break;
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SingleStartBrickBreakerRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 level_id = 10; */
        if (message.levelId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.levelId);
        /* bool is_dungeon = 9; */
        if (message.isDungeon !== false)
            writer.tag(9, WireType.Varint).bool(message.isDungeon);
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SingleStartBrickBreakerRsp
 */
export const SingleStartBrickBreakerRsp = new SingleStartBrickBreakerRsp$Type();
