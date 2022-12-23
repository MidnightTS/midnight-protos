// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TowerEnterLevelRsp.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2439;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message TowerEnterLevelRsp
 */
export interface TowerEnterLevelRsp {
    /**
     * @generated from protobuf field: repeated uint32 tower_buff_id_list = 5;
     */
    towerBuffIdList: number[];
    /**
     * @generated from protobuf field: uint32 level_index = 3;
     */
    levelIndex: number;
    /**
     * @generated from protobuf field: uint32 floor_id = 11;
     */
    floorId: number;
    /**
     * @generated from protobuf field: int32 retcode = 14;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class TowerEnterLevelRsp$Type extends MessageType<TowerEnterLevelRsp> {
    constructor() {
        super("TowerEnterLevelRsp", [
            { no: 5, name: "tower_buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "level_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "floor_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<TowerEnterLevelRsp>): TowerEnterLevelRsp {
        const message = { towerBuffIdList: [], levelIndex: 0, floorId: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TowerEnterLevelRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TowerEnterLevelRsp): TowerEnterLevelRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 tower_buff_id_list */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.towerBuffIdList.push(reader.uint32());
                    else
                        message.towerBuffIdList.push(reader.uint32());
                    break;
                case /* uint32 level_index */ 3:
                    message.levelIndex = reader.uint32();
                    break;
                case /* uint32 floor_id */ 11:
                    message.floorId = reader.uint32();
                    break;
                case /* int32 retcode */ 14:
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
    internalBinaryWrite(message: TowerEnterLevelRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 tower_buff_id_list = 5; */
        if (message.towerBuffIdList.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.towerBuffIdList.length; i++)
                writer.uint32(message.towerBuffIdList[i]);
            writer.join();
        }
        /* uint32 level_index = 3; */
        if (message.levelIndex !== 0)
            writer.tag(3, WireType.Varint).uint32(message.levelIndex);
        /* uint32 floor_id = 11; */
        if (message.floorId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.floorId);
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerEnterLevelRsp
 */
export const TowerEnterLevelRsp = new TowerEnterLevelRsp$Type();
