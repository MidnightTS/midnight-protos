// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "BounceConjuringGallerySettleInfo.proto" (syntax proto3)
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
import { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo";
import { OnlinePlayerInfo } from "./OnlinePlayerInfo";
/**
 * @generated from protobuf message BounceConjuringGallerySettleInfo
 */
export interface BounceConjuringGallerySettleInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_PELHBJDMKAE = 6 [json_name = "Unk3300PELHBJDMKAE"];
     */
    unk3300PELHBJDMKAE: number;
    /**
     * @generated from protobuf field: uint32 score = 15;
     */
    score: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> gadget_count_map = 3;
     */
    gadgetCountMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 Unk3300_CNGOBOFDEOE = 11 [json_name = "Unk3300CNGOBOFDEOE"];
     */
    unk3300CNGOBOFDEOE: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_NKGFKLGDFAC = 1 [json_name = "Unk3300NKGFKLGDFAC"];
     */
    unk3300NKGFKLGDFAC: number;
    /**
     * @generated from protobuf field: OnlinePlayerInfo player_info = 2;
     */
    playerInfo?: OnlinePlayerInfo;
    /**
     * @generated from protobuf field: float damage = 12;
     */
    damage: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_BJHCDKNFDFN = 7 [json_name = "Unk3300BJHCDKNFDFN"];
     */
    unk3300BJHCDKNFDFN: number;
    /**
     * @generated from protobuf field: repeated ExhibitionDisplayInfo card_list = 9;
     */
    cardList: ExhibitionDisplayInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class BounceConjuringGallerySettleInfo$Type extends MessageType<BounceConjuringGallerySettleInfo> {
    constructor() {
        super("BounceConjuringGallerySettleInfo", [
            { no: 6, name: "Unk3300_PELHBJDMKAE", kind: "scalar", jsonName: "Unk3300PELHBJDMKAE", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gadget_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "Unk3300_CNGOBOFDEOE", kind: "scalar", jsonName: "Unk3300CNGOBOFDEOE", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_NKGFKLGDFAC", kind: "scalar", jsonName: "Unk3300NKGFKLGDFAC", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "player_info", kind: "message", T: () => OnlinePlayerInfo },
            { no: 12, name: "damage", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 7, name: "Unk3300_BJHCDKNFDFN", kind: "scalar", jsonName: "Unk3300BJHCDKNFDFN", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo }
        ]);
    }
    create(value?: PartialMessage<BounceConjuringGallerySettleInfo>): BounceConjuringGallerySettleInfo {
        const message = { unk3300PELHBJDMKAE: 0, score: 0, gadgetCountMap: {}, unk3300CNGOBOFDEOE: 0, unk3300NKGFKLGDFAC: 0, damage: 0, unk3300BJHCDKNFDFN: 0, cardList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BounceConjuringGallerySettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BounceConjuringGallerySettleInfo): BounceConjuringGallerySettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_PELHBJDMKAE = 6 [json_name = "Unk3300PELHBJDMKAE"];*/ 6:
                    message.unk3300PELHBJDMKAE = reader.uint32();
                    break;
                case /* uint32 score */ 15:
                    message.score = reader.uint32();
                    break;
                case /* map<uint32, uint32> gadget_count_map */ 3:
                    this.binaryReadMap3(message.gadgetCountMap, reader, options);
                    break;
                case /* uint32 Unk3300_CNGOBOFDEOE = 11 [json_name = "Unk3300CNGOBOFDEOE"];*/ 11:
                    message.unk3300CNGOBOFDEOE = reader.uint32();
                    break;
                case /* uint32 Unk3300_NKGFKLGDFAC = 1 [json_name = "Unk3300NKGFKLGDFAC"];*/ 1:
                    message.unk3300NKGFKLGDFAC = reader.uint32();
                    break;
                case /* OnlinePlayerInfo player_info */ 2:
                    message.playerInfo = OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* float damage */ 12:
                    message.damage = reader.float();
                    break;
                case /* uint32 Unk3300_BJHCDKNFDFN = 7 [json_name = "Unk3300BJHCDKNFDFN"];*/ 7:
                    message.unk3300BJHCDKNFDFN = reader.uint32();
                    break;
                case /* repeated ExhibitionDisplayInfo card_list */ 9:
                    message.cardList.push(ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    private binaryReadMap3(map: BounceConjuringGallerySettleInfo["gadgetCountMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof BounceConjuringGallerySettleInfo["gadgetCountMap"] | undefined, val: BounceConjuringGallerySettleInfo["gadgetCountMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field BounceConjuringGallerySettleInfo.gadget_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: BounceConjuringGallerySettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_PELHBJDMKAE = 6 [json_name = "Unk3300PELHBJDMKAE"]; */
        if (message.unk3300PELHBJDMKAE !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300PELHBJDMKAE);
        /* uint32 score = 15; */
        if (message.score !== 0)
            writer.tag(15, WireType.Varint).uint32(message.score);
        /* map<uint32, uint32> gadget_count_map = 3; */
        for (let k of Object.keys(message.gadgetCountMap))
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.gadgetCountMap[k as any]).join();
        /* uint32 Unk3300_CNGOBOFDEOE = 11 [json_name = "Unk3300CNGOBOFDEOE"]; */
        if (message.unk3300CNGOBOFDEOE !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300CNGOBOFDEOE);
        /* uint32 Unk3300_NKGFKLGDFAC = 1 [json_name = "Unk3300NKGFKLGDFAC"]; */
        if (message.unk3300NKGFKLGDFAC !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300NKGFKLGDFAC);
        /* OnlinePlayerInfo player_info = 2; */
        if (message.playerInfo)
            OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* float damage = 12; */
        if (message.damage !== 0)
            writer.tag(12, WireType.Bit32).float(message.damage);
        /* uint32 Unk3300_BJHCDKNFDFN = 7 [json_name = "Unk3300BJHCDKNFDFN"]; */
        if (message.unk3300BJHCDKNFDFN !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300BJHCDKNFDFN);
        /* repeated ExhibitionDisplayInfo card_list = 9; */
        for (let i = 0; i < message.cardList.length; i++)
            ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BounceConjuringGallerySettleInfo
 */
export const BounceConjuringGallerySettleInfo = new BounceConjuringGallerySettleInfo$Type();
