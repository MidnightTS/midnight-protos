"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCompoundMaterialBoostReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCompoundMaterialBoostReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerCompoundMaterialBoostReq", [
            { no: 13, name: "is_boost_all", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "Unk3300_PPDDLODBIKG", kind: "scalar", jsonName: "Unk3300PPDDLODBIKG", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_BGHFBCLHCIG", kind: "scalar", jsonName: "Unk3300BGHFBCLHCIG", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_FEGPHHFLFLM", kind: "scalar", jsonName: "Unk3300FEGPHHFLFLM", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isBoostAll: false, unk3300PPDDLODBIKG: 0, unk3300BGHFBCLHCIG: 0, unk3300FEGPHHFLFLM: 0 };
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
                case /* bool is_boost_all */ 13:
                    message.isBoostAll = reader.bool();
                    break;
                case /* uint32 Unk3300_PPDDLODBIKG = 8 [json_name = "Unk3300PPDDLODBIKG"];*/ 8:
                    message.unk3300PPDDLODBIKG = reader.uint32();
                    break;
                case /* uint32 Unk3300_BGHFBCLHCIG = 5 [json_name = "Unk3300BGHFBCLHCIG"];*/ 5:
                    message.unk3300BGHFBCLHCIG = reader.uint32();
                    break;
                case /* uint32 Unk3300_FEGPHHFLFLM = 11 [json_name = "Unk3300FEGPHHFLFLM"];*/ 11:
                    message.unk3300FEGPHHFLFLM = reader.uint32();
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
    internalBinaryWrite(message, writer, options) {
        /* bool is_boost_all = 13; */
        if (message.isBoostAll !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isBoostAll);
        /* uint32 Unk3300_PPDDLODBIKG = 8 [json_name = "Unk3300PPDDLODBIKG"]; */
        if (message.unk3300PPDDLODBIKG !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300PPDDLODBIKG);
        /* uint32 Unk3300_BGHFBCLHCIG = 5 [json_name = "Unk3300BGHFBCLHCIG"]; */
        if (message.unk3300BGHFBCLHCIG !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300BGHFBCLHCIG);
        /* uint32 Unk3300_FEGPHHFLFLM = 11 [json_name = "Unk3300FEGPHHFLFLM"]; */
        if (message.unk3300FEGPHHFLFLM !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300FEGPHHFLFLM);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerCompoundMaterialBoostReq
 */
exports.PlayerCompoundMaterialBoostReq = new PlayerCompoundMaterialBoostReq$Type();
