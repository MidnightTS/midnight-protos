// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "UgcMusicBriefInfo.proto" (syntax proto3)
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
 * @generated from protobuf message UgcMusicBriefInfo
 */
export interface UgcMusicBriefInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_OJOKFBJALIJ = 12 [json_name = "Unk3300OJOKFBJALIJ"];
     */
    unk3300OJOKFBJALIJ: number;
    /**
     * @generated from protobuf field: bool Unk3300_NCDKCNOLGKB = 15 [json_name = "Unk3300NCDKCNOLGKB"];
     */
    unk3300NCDKCNOLGKB: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_KMMBLIMKJCM = 5 [json_name = "Unk3300KMMBLIMKJCM"];
     */
    unk3300KMMBLIMKJCM: number;
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_JEEBFPFEHHG = 526 [json_name = "Unk3300JEEBFPFEHHG"];
     */
    unk3300JEEBFPFEHHG: number[];
    /**
     * @generated from protobuf field: uint32 Unk3300_EGIGIOOKBAB = 42 [json_name = "Unk3300EGIGIOOKBAB"];
     */
    unk3300EGIGIOOKBAB: number;
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_HKBHAIMOBKO = 65 [json_name = "Unk3300HKBHAIMOBKO"];
     */
    unk3300HKBHAIMOBKO: number[];
    /**
     * @generated from protobuf field: uint32 Unk3300_MBKDGBNFPOA = 1625 [json_name = "Unk3300MBKDGBNFPOA"];
     */
    unk3300MBKDGBNFPOA: number;
    /**
     * @generated from protobuf field: uint64 import_from_ugc_guid = 13;
     */
    importFromUgcGuid: bigint;
    /**
     * @generated from protobuf field: uint64 ugc_guid = 8;
     */
    ugcGuid: bigint;
    /**
     * @generated from protobuf field: uint32 Unk3300_PBENMAHHGIL = 7 [json_name = "Unk3300PBENMAHHGIL"];
     */
    unk3300PBENMAHHGIL: number;
    /**
     * @generated from protobuf field: bool Unk3300_FKIGPAJFPLG = 3 [json_name = "Unk3300FKIGPAJFPLG"];
     */
    unk3300FKIGPAJFPLG: boolean;
    /**
     * @generated from protobuf field: uint32 version = 11;
     */
    version: number;
    /**
     * @generated from protobuf field: bool is_psn_platform = 2;
     */
    isPsnPlatform: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_PLNOFOHFAPE = 4 [json_name = "Unk3300PLNOFOHFAPE"];
     */
    unk3300PLNOFOHFAPE: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_CCMMPAHIMDO = 95 [json_name = "Unk3300CCMMPAHIMDO"];
     */
    unk3300CCMMPAHIMDO: number;
    /**
     * @generated from protobuf field: string creator_nickname = 9;
     */
    creatorNickname: string;
    /**
     * @generated from protobuf field: uint32 music_id = 6;
     */
    musicId: number;
    /**
     * @generated from protobuf field: bool Unk3300_GDNAPNAINBA = 10 [json_name = "Unk3300GDNAPNAINBA"];
     */
    unk3300GDNAPNAINBA: boolean;
    /**
     * @generated from protobuf field: uint32 max_score = 1;
     */
    maxScore: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_OBBMCFADNIN = 14 [json_name = "Unk3300OBBMCFADNIN"];
     */
    unk3300OBBMCFADNIN: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class UgcMusicBriefInfo$Type extends MessageType<UgcMusicBriefInfo> {
    constructor() {
        super("UgcMusicBriefInfo", [
            { no: 12, name: "Unk3300_OJOKFBJALIJ", kind: "scalar", jsonName: "Unk3300OJOKFBJALIJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_NCDKCNOLGKB", kind: "scalar", jsonName: "Unk3300NCDKCNOLGKB", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "Unk3300_KMMBLIMKJCM", kind: "scalar", jsonName: "Unk3300KMMBLIMKJCM", T: 13 /*ScalarType.UINT32*/ },
            { no: 526, name: "Unk3300_JEEBFPFEHHG", kind: "scalar", jsonName: "Unk3300JEEBFPFEHHG", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 42, name: "Unk3300_EGIGIOOKBAB", kind: "scalar", jsonName: "Unk3300EGIGIOOKBAB", T: 13 /*ScalarType.UINT32*/ },
            { no: 65, name: "Unk3300_HKBHAIMOBKO", kind: "scalar", jsonName: "Unk3300HKBHAIMOBKO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1625, name: "Unk3300_MBKDGBNFPOA", kind: "scalar", jsonName: "Unk3300MBKDGBNFPOA", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "import_from_ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "Unk3300_PBENMAHHGIL", kind: "scalar", jsonName: "Unk3300PBENMAHHGIL", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_FKIGPAJFPLG", kind: "scalar", jsonName: "Unk3300FKIGPAJFPLG", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_psn_platform", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_PLNOFOHFAPE", kind: "scalar", jsonName: "Unk3300PLNOFOHFAPE", T: 13 /*ScalarType.UINT32*/ },
            { no: 95, name: "Unk3300_CCMMPAHIMDO", kind: "scalar", jsonName: "Unk3300CCMMPAHIMDO", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "creator_nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "music_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_GDNAPNAINBA", kind: "scalar", jsonName: "Unk3300GDNAPNAINBA", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_OBBMCFADNIN", kind: "scalar", jsonName: "Unk3300OBBMCFADNIN", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<UgcMusicBriefInfo>): UgcMusicBriefInfo {
        const message = { unk3300OJOKFBJALIJ: 0, unk3300NCDKCNOLGKB: false, unk3300KMMBLIMKJCM: 0, unk3300JEEBFPFEHHG: [], unk3300EGIGIOOKBAB: 0, unk3300HKBHAIMOBKO: [], unk3300MBKDGBNFPOA: 0, importFromUgcGuid: 0n, ugcGuid: 0n, unk3300PBENMAHHGIL: 0, unk3300FKIGPAJFPLG: false, version: 0, isPsnPlatform: false, unk3300PLNOFOHFAPE: 0, unk3300CCMMPAHIMDO: 0, creatorNickname: "", musicId: 0, unk3300GDNAPNAINBA: false, maxScore: 0, unk3300OBBMCFADNIN: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UgcMusicBriefInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UgcMusicBriefInfo): UgcMusicBriefInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_OJOKFBJALIJ = 12 [json_name = "Unk3300OJOKFBJALIJ"];*/ 12:
                    message.unk3300OJOKFBJALIJ = reader.uint32();
                    break;
                case /* bool Unk3300_NCDKCNOLGKB = 15 [json_name = "Unk3300NCDKCNOLGKB"];*/ 15:
                    message.unk3300NCDKCNOLGKB = reader.bool();
                    break;
                case /* uint32 Unk3300_KMMBLIMKJCM = 5 [json_name = "Unk3300KMMBLIMKJCM"];*/ 5:
                    message.unk3300KMMBLIMKJCM = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_JEEBFPFEHHG = 526 [json_name = "Unk3300JEEBFPFEHHG"];*/ 526:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300JEEBFPFEHHG.push(reader.uint32());
                    else
                        message.unk3300JEEBFPFEHHG.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_EGIGIOOKBAB = 42 [json_name = "Unk3300EGIGIOOKBAB"];*/ 42:
                    message.unk3300EGIGIOOKBAB = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_HKBHAIMOBKO = 65 [json_name = "Unk3300HKBHAIMOBKO"];*/ 65:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HKBHAIMOBKO.push(reader.uint32());
                    else
                        message.unk3300HKBHAIMOBKO.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_MBKDGBNFPOA = 1625 [json_name = "Unk3300MBKDGBNFPOA"];*/ 1625:
                    message.unk3300MBKDGBNFPOA = reader.uint32();
                    break;
                case /* uint64 import_from_ugc_guid */ 13:
                    message.importFromUgcGuid = reader.uint64().toBigInt();
                    break;
                case /* uint64 ugc_guid */ 8:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_PBENMAHHGIL = 7 [json_name = "Unk3300PBENMAHHGIL"];*/ 7:
                    message.unk3300PBENMAHHGIL = reader.uint32();
                    break;
                case /* bool Unk3300_FKIGPAJFPLG = 3 [json_name = "Unk3300FKIGPAJFPLG"];*/ 3:
                    message.unk3300FKIGPAJFPLG = reader.bool();
                    break;
                case /* uint32 version */ 11:
                    message.version = reader.uint32();
                    break;
                case /* bool is_psn_platform */ 2:
                    message.isPsnPlatform = reader.bool();
                    break;
                case /* uint32 Unk3300_PLNOFOHFAPE = 4 [json_name = "Unk3300PLNOFOHFAPE"];*/ 4:
                    message.unk3300PLNOFOHFAPE = reader.uint32();
                    break;
                case /* uint32 Unk3300_CCMMPAHIMDO = 95 [json_name = "Unk3300CCMMPAHIMDO"];*/ 95:
                    message.unk3300CCMMPAHIMDO = reader.uint32();
                    break;
                case /* string creator_nickname */ 9:
                    message.creatorNickname = reader.string();
                    break;
                case /* uint32 music_id */ 6:
                    message.musicId = reader.uint32();
                    break;
                case /* bool Unk3300_GDNAPNAINBA = 10 [json_name = "Unk3300GDNAPNAINBA"];*/ 10:
                    message.unk3300GDNAPNAINBA = reader.bool();
                    break;
                case /* uint32 max_score */ 1:
                    message.maxScore = reader.uint32();
                    break;
                case /* uint32 Unk3300_OBBMCFADNIN = 14 [json_name = "Unk3300OBBMCFADNIN"];*/ 14:
                    message.unk3300OBBMCFADNIN = reader.uint32();
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
    internalBinaryWrite(message: UgcMusicBriefInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_OJOKFBJALIJ = 12 [json_name = "Unk3300OJOKFBJALIJ"]; */
        if (message.unk3300OJOKFBJALIJ !== 0)
            writer.tag(12, WireType.Varint).uint32(message.unk3300OJOKFBJALIJ);
        /* bool Unk3300_NCDKCNOLGKB = 15 [json_name = "Unk3300NCDKCNOLGKB"]; */
        if (message.unk3300NCDKCNOLGKB !== false)
            writer.tag(15, WireType.Varint).bool(message.unk3300NCDKCNOLGKB);
        /* uint32 Unk3300_KMMBLIMKJCM = 5 [json_name = "Unk3300KMMBLIMKJCM"]; */
        if (message.unk3300KMMBLIMKJCM !== 0)
            writer.tag(5, WireType.Varint).uint32(message.unk3300KMMBLIMKJCM);
        /* repeated uint32 Unk3300_JEEBFPFEHHG = 526 [json_name = "Unk3300JEEBFPFEHHG"]; */
        if (message.unk3300JEEBFPFEHHG.length) {
            writer.tag(526, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300JEEBFPFEHHG.length; i++)
                writer.uint32(message.unk3300JEEBFPFEHHG[i]);
            writer.join();
        }
        /* uint32 Unk3300_EGIGIOOKBAB = 42 [json_name = "Unk3300EGIGIOOKBAB"]; */
        if (message.unk3300EGIGIOOKBAB !== 0)
            writer.tag(42, WireType.Varint).uint32(message.unk3300EGIGIOOKBAB);
        /* repeated uint32 Unk3300_HKBHAIMOBKO = 65 [json_name = "Unk3300HKBHAIMOBKO"]; */
        if (message.unk3300HKBHAIMOBKO.length) {
            writer.tag(65, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HKBHAIMOBKO.length; i++)
                writer.uint32(message.unk3300HKBHAIMOBKO[i]);
            writer.join();
        }
        /* uint32 Unk3300_MBKDGBNFPOA = 1625 [json_name = "Unk3300MBKDGBNFPOA"]; */
        if (message.unk3300MBKDGBNFPOA !== 0)
            writer.tag(1625, WireType.Varint).uint32(message.unk3300MBKDGBNFPOA);
        /* uint64 import_from_ugc_guid = 13; */
        if (message.importFromUgcGuid !== 0n)
            writer.tag(13, WireType.Varint).uint64(message.importFromUgcGuid);
        /* uint64 ugc_guid = 8; */
        if (message.ugcGuid !== 0n)
            writer.tag(8, WireType.Varint).uint64(message.ugcGuid);
        /* uint32 Unk3300_PBENMAHHGIL = 7 [json_name = "Unk3300PBENMAHHGIL"]; */
        if (message.unk3300PBENMAHHGIL !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300PBENMAHHGIL);
        /* bool Unk3300_FKIGPAJFPLG = 3 [json_name = "Unk3300FKIGPAJFPLG"]; */
        if (message.unk3300FKIGPAJFPLG !== false)
            writer.tag(3, WireType.Varint).bool(message.unk3300FKIGPAJFPLG);
        /* uint32 version = 11; */
        if (message.version !== 0)
            writer.tag(11, WireType.Varint).uint32(message.version);
        /* bool is_psn_platform = 2; */
        if (message.isPsnPlatform !== false)
            writer.tag(2, WireType.Varint).bool(message.isPsnPlatform);
        /* uint32 Unk3300_PLNOFOHFAPE = 4 [json_name = "Unk3300PLNOFOHFAPE"]; */
        if (message.unk3300PLNOFOHFAPE !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300PLNOFOHFAPE);
        /* uint32 Unk3300_CCMMPAHIMDO = 95 [json_name = "Unk3300CCMMPAHIMDO"]; */
        if (message.unk3300CCMMPAHIMDO !== 0)
            writer.tag(95, WireType.Varint).uint32(message.unk3300CCMMPAHIMDO);
        /* string creator_nickname = 9; */
        if (message.creatorNickname !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.creatorNickname);
        /* uint32 music_id = 6; */
        if (message.musicId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.musicId);
        /* bool Unk3300_GDNAPNAINBA = 10 [json_name = "Unk3300GDNAPNAINBA"]; */
        if (message.unk3300GDNAPNAINBA !== false)
            writer.tag(10, WireType.Varint).bool(message.unk3300GDNAPNAINBA);
        /* uint32 max_score = 1; */
        if (message.maxScore !== 0)
            writer.tag(1, WireType.Varint).uint32(message.maxScore);
        /* uint32 Unk3300_OBBMCFADNIN = 14 [json_name = "Unk3300OBBMCFADNIN"]; */
        if (message.unk3300OBBMCFADNIN !== 0)
            writer.tag(14, WireType.Varint).uint32(message.unk3300OBBMCFADNIN);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UgcMusicBriefInfo
 */
export const UgcMusicBriefInfo = new UgcMusicBriefInfo$Type();
