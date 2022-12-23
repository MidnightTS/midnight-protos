// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GetDailyDungeonEntryInfoRsp.proto" (syntax proto3)
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
import { DailyDungeonEntryInfo } from "./DailyDungeonEntryInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 953;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GetDailyDungeonEntryInfoRsp
 */
export interface GetDailyDungeonEntryInfoRsp {
    /**
     * @generated from protobuf field: repeated DailyDungeonEntryInfo daily_dungeon_info_list = 1;
     */
    dailyDungeonInfoList: DailyDungeonEntryInfo[];
    /**
     * @generated from protobuf field: int32 retcode = 9;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetDailyDungeonEntryInfoRsp$Type extends MessageType<GetDailyDungeonEntryInfoRsp> {
    constructor() {
        super("GetDailyDungeonEntryInfoRsp", [
            { no: 1, name: "daily_dungeon_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DailyDungeonEntryInfo },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetDailyDungeonEntryInfoRsp>): GetDailyDungeonEntryInfoRsp {
        const message = { dailyDungeonInfoList: [], retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetDailyDungeonEntryInfoRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDailyDungeonEntryInfoRsp): GetDailyDungeonEntryInfoRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated DailyDungeonEntryInfo daily_dungeon_info_list */ 1:
                    message.dailyDungeonInfoList.push(DailyDungeonEntryInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 9:
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
    internalBinaryWrite(message: GetDailyDungeonEntryInfoRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated DailyDungeonEntryInfo daily_dungeon_info_list = 1; */
        for (let i = 0; i < message.dailyDungeonInfoList.length; i++)
            DailyDungeonEntryInfo.internalBinaryWrite(message.dailyDungeonInfoList[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetDailyDungeonEntryInfoRsp
 */
export const GetDailyDungeonEntryInfoRsp = new GetDailyDungeonEntryInfoRsp$Type();
