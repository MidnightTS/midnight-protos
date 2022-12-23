// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CustomDungeonRecoverNotify.proto" (syntax proto3)
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
import { TryCustomDungeonType } from "./TryCustomDungeonType";
import { EnterCustomDungeonType } from "./EnterCustomDungeonType";
import { CustomDungeon } from "./CustomDungeon";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 6228;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message CustomDungeonRecoverNotify
 */
export interface CustomDungeonRecoverNotify {
    /**
     * @generated from protobuf field: CustomDungeon custom_dungeon = 15;
     */
    customDungeon?: CustomDungeon;
    /**
     * @generated from protobuf field: EnterCustomDungeonType enter_type = 1;
     */
    enterType: EnterCustomDungeonType;
    /**
     * @generated from protobuf field: TryCustomDungeonType try_type = 8;
     */
    tryType: TryCustomDungeonType;
    /**
     * @generated from protobuf field: repeated uint32 official_black_coin_list = 3;
     */
    officialBlackCoinList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonRecoverNotify$Type extends MessageType<CustomDungeonRecoverNotify> {
    constructor() {
        super("CustomDungeonRecoverNotify", [
            { no: 15, name: "custom_dungeon", kind: "message", T: () => CustomDungeon },
            { no: 1, name: "enter_type", kind: "enum", T: () => ["EnterCustomDungeonType", EnterCustomDungeonType, "ENTER_CUSTOM_DUNGEON_TYPE_"] },
            { no: 8, name: "try_type", kind: "enum", T: () => ["TryCustomDungeonType", TryCustomDungeonType, "TRY_CUSTOM_DUNGEON_TYPE_"] },
            { no: 3, name: "official_black_coin_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CustomDungeonRecoverNotify>): CustomDungeonRecoverNotify {
        const message = { enterType: 0, tryType: 0, officialBlackCoinList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomDungeonRecoverNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomDungeonRecoverNotify): CustomDungeonRecoverNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* CustomDungeon custom_dungeon */ 15:
                    message.customDungeon = CustomDungeon.internalBinaryRead(reader, reader.uint32(), options, message.customDungeon);
                    break;
                case /* EnterCustomDungeonType enter_type */ 1:
                    message.enterType = reader.int32();
                    break;
                case /* TryCustomDungeonType try_type */ 8:
                    message.tryType = reader.int32();
                    break;
                case /* repeated uint32 official_black_coin_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.officialBlackCoinList.push(reader.uint32());
                    else
                        message.officialBlackCoinList.push(reader.uint32());
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
    internalBinaryWrite(message: CustomDungeonRecoverNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* CustomDungeon custom_dungeon = 15; */
        if (message.customDungeon)
            CustomDungeon.internalBinaryWrite(message.customDungeon, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* EnterCustomDungeonType enter_type = 1; */
        if (message.enterType !== 0)
            writer.tag(1, WireType.Varint).int32(message.enterType);
        /* TryCustomDungeonType try_type = 8; */
        if (message.tryType !== 0)
            writer.tag(8, WireType.Varint).int32(message.tryType);
        /* repeated uint32 official_black_coin_list = 3; */
        if (message.officialBlackCoinList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.officialBlackCoinList.length; i++)
                writer.uint32(message.officialBlackCoinList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonRecoverNotify
 */
export const CustomDungeonRecoverNotify = new CustomDungeonRecoverNotify$Type();
