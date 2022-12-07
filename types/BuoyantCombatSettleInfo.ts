// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "BuoyantCombatSettleInfo.proto" (syntax proto3)
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
import { BuoyantCombatGallerySettleInfo } from "./BuoyantCombatGallerySettleInfo";
/**
 * @generated from protobuf message BuoyantCombatSettleInfo
 */
export interface BuoyantCombatSettleInfo {
    /**
     * @generated from protobuf field: BuoyantCombatGallerySettleInfo settle_info = 14;
     */
    settleInfo?: BuoyantCombatGallerySettleInfo;
    /**
     * @generated from protobuf field: bool is_new_record = 2;
     */
    isNewRecord: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class BuoyantCombatSettleInfo$Type extends MessageType<BuoyantCombatSettleInfo> {
    constructor() {
        super("BuoyantCombatSettleInfo", [
            { no: 14, name: "settle_info", kind: "message", T: () => BuoyantCombatGallerySettleInfo },
            { no: 2, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<BuoyantCombatSettleInfo>): BuoyantCombatSettleInfo {
        const message = { isNewRecord: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BuoyantCombatSettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BuoyantCombatSettleInfo): BuoyantCombatSettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* BuoyantCombatGallerySettleInfo settle_info */ 14:
                    message.settleInfo = BuoyantCombatGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* bool is_new_record */ 2:
                    message.isNewRecord = reader.bool();
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
    internalBinaryWrite(message: BuoyantCombatSettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* BuoyantCombatGallerySettleInfo settle_info = 14; */
        if (message.settleInfo)
            BuoyantCombatGallerySettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* bool is_new_record = 2; */
        if (message.isNewRecord !== false)
            writer.tag(2, WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BuoyantCombatSettleInfo
 */
export const BuoyantCombatSettleInfo = new BuoyantCombatSettleInfo$Type();
