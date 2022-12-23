// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlayerCompoundMaterialBoostRsp.proto" (syntax proto3)
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
import { ItemParam } from "./ItemParam";
import { CompoundBoostTakeStatusType } from "./CompoundBoostTakeStatusType";
import { CompoundQueueData } from "./CompoundQueueData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 129;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PlayerCompoundMaterialBoostRsp
 */
export interface PlayerCompoundMaterialBoostRsp {
    /**
     * @generated from protobuf field: repeated CompoundQueueData compound_queue_data_list = 10;
     */
    compoundQueueDataList: CompoundQueueData[];
    /**
     * @generated from protobuf field: CompoundBoostTakeStatusType take_status = 4;
     */
    takeStatus: CompoundBoostTakeStatusType;
    /**
     * @generated from protobuf field: repeated ItemParam take_item_list = 3;
     */
    takeItemList: ItemParam[];
    /**
     * @generated from protobuf field: int32 retcode = 13;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCompoundMaterialBoostRsp$Type extends MessageType<PlayerCompoundMaterialBoostRsp> {
    constructor() {
        super("PlayerCompoundMaterialBoostRsp", [
            { no: 10, name: "compound_queue_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CompoundQueueData },
            { no: 4, name: "take_status", kind: "enum", T: () => ["CompoundBoostTakeStatusType", CompoundBoostTakeStatusType, "COMPOUND_BOOST_TAKE_STATUS_TYPE_"] },
            { no: 3, name: "take_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerCompoundMaterialBoostRsp>): PlayerCompoundMaterialBoostRsp {
        const message = { compoundQueueDataList: [], takeStatus: 0, takeItemList: [], retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerCompoundMaterialBoostRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerCompoundMaterialBoostRsp): PlayerCompoundMaterialBoostRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated CompoundQueueData compound_queue_data_list */ 10:
                    message.compoundQueueDataList.push(CompoundQueueData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* CompoundBoostTakeStatusType take_status */ 4:
                    message.takeStatus = reader.int32();
                    break;
                case /* repeated ItemParam take_item_list */ 3:
                    message.takeItemList.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 13:
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
    internalBinaryWrite(message: PlayerCompoundMaterialBoostRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated CompoundQueueData compound_queue_data_list = 10; */
        for (let i = 0; i < message.compoundQueueDataList.length; i++)
            CompoundQueueData.internalBinaryWrite(message.compoundQueueDataList[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* CompoundBoostTakeStatusType take_status = 4; */
        if (message.takeStatus !== 0)
            writer.tag(4, WireType.Varint).int32(message.takeStatus);
        /* repeated ItemParam take_item_list = 3; */
        for (let i = 0; i < message.takeItemList.length; i++)
            ItemParam.internalBinaryWrite(message.takeItemList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerCompoundMaterialBoostRsp
 */
export const PlayerCompoundMaterialBoostRsp = new PlayerCompoundMaterialBoostRsp$Type();
