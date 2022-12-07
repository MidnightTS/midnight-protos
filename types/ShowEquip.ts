// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ShowEquip.proto" (syntax proto3)
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
import { Weapon } from "./Weapon";
import { Reliquary } from "./Reliquary";
/**
 * @generated from protobuf message ShowEquip
 */
export interface ShowEquip {
    /**
     * @generated from protobuf field: uint32 item_id = 1;
     */
    itemId: number;
    /**
     * @generated from protobuf oneof: detail
     */
    detail: {
        oneofKind: "reliquary";
        /**
         * @generated from protobuf field: Reliquary reliquary = 2;
         */
        reliquary: Reliquary;
    } | {
        oneofKind: "weapon";
        /**
         * @generated from protobuf field: Weapon weapon = 3;
         */
        weapon: Weapon;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class ShowEquip$Type extends MessageType<ShowEquip> {
    constructor() {
        super("ShowEquip", [
            { no: 1, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "reliquary", kind: "message", oneof: "detail", T: () => Reliquary },
            { no: 3, name: "weapon", kind: "message", oneof: "detail", T: () => Weapon }
        ]);
    }
    create(value?: PartialMessage<ShowEquip>): ShowEquip {
        const message = { itemId: 0, detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ShowEquip>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShowEquip): ShowEquip {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* Reliquary reliquary */ 2:
                    message.detail = {
                        oneofKind: "reliquary",
                        reliquary: Reliquary.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).reliquary)
                    };
                    break;
                case /* Weapon weapon */ 3:
                    message.detail = {
                        oneofKind: "weapon",
                        weapon: Weapon.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).weapon)
                    };
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
    internalBinaryWrite(message: ShowEquip, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 item_id = 1; */
        if (message.itemId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.itemId);
        /* Reliquary reliquary = 2; */
        if (message.detail.oneofKind === "reliquary")
            Reliquary.internalBinaryWrite(message.detail.reliquary, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* Weapon weapon = 3; */
        if (message.detail.oneofKind === "weapon")
            Weapon.internalBinaryWrite(message.detail.weapon, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShowEquip
 */
export const ShowEquip = new ShowEquip$Type();
