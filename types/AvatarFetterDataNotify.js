"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarFetterDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarFetterInfo_1 = require("./AvatarFetterInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFetterDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarFetterDataNotify", [
            { no: 2, name: "fetter_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => AvatarFetterInfo_1.AvatarFetterInfo } }
        ]);
    }
    create(value) {
        const message = { fetterInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint64, AvatarFetterInfo> fetter_info_map */ 2:
                    this.binaryReadMap2(message.fetterInfoMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap2(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = AvatarFetterInfo_1.AvatarFetterInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarFetterDataNotify.fetter_info_map");
            }
        }
        map[key ?? "0"] = val ?? AvatarFetterInfo_1.AvatarFetterInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint64, AvatarFetterInfo> fetter_info_map = 2; */
        for (let k of Object.keys(message.fetterInfoMap)) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k);
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            AvatarFetterInfo_1.AvatarFetterInfo.internalBinaryWrite(message.fetterInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarFetterDataNotify
 */
exports.AvatarFetterDataNotify = new AvatarFetterDataNotify$Type();
