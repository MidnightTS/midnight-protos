"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryPathReq = exports.QueryPathReq_OptionType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector3Int_1 = require("./Vector3Int");
const Vector_1 = require("./Vector");
const QueryFilter_1 = require("./QueryFilter");
/**
 * @generated from protobuf enum QueryPathReq.OptionType
 */
var QueryPathReq_OptionType;
(function (QueryPathReq_OptionType) {
    /**
     * @generated from protobuf enum value: OPTION_TYPE_NONE = 0;
     */
    QueryPathReq_OptionType[QueryPathReq_OptionType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: OPTION_TYPE_NORMAL = 1;
     */
    QueryPathReq_OptionType[QueryPathReq_OptionType["NORMAL"] = 1] = "NORMAL";
    /**
     * @generated from protobuf enum value: OPTION_TYPE_FIRST_CAN_GO = 2;
     */
    QueryPathReq_OptionType[QueryPathReq_OptionType["FIRST_CAN_GO"] = 2] = "FIRST_CAN_GO";
})(QueryPathReq_OptionType = exports.QueryPathReq_OptionType || (exports.QueryPathReq_OptionType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class QueryPathReq$Type extends runtime_5.MessageType {
    constructor() {
        super("QueryPathReq", [
            { no: 7, name: "filter", kind: "message", T: () => QueryFilter_1.QueryFilter },
            { no: 3, name: "query_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "destination_pos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector_1.Vector },
            { no: 11, name: "query_type", kind: "enum", T: () => ["QueryPathReq.OptionType", QueryPathReq_OptionType, "OPTION_TYPE_"] },
            { no: 4, name: "Unk3300_LHNGPJFOMIK", kind: "message", jsonName: "Unk3300LHNGPJFOMIK", T: () => Vector3Int_1.Vector3Int },
            { no: 2, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "source_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "Unk3300_CLGJBBJDOLN", kind: "message", jsonName: "Unk3300CLGJBBJDOLN", T: () => Vector3Int_1.Vector3Int }
        ]);
    }
    create(value) {
        const message = { queryId: 0, destinationPos: [], queryType: 0, sceneId: 0 };
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
                case /* QueryFilter filter */ 7:
                    message.filter = QueryFilter_1.QueryFilter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* int32 query_id */ 3:
                    message.queryId = reader.int32();
                    break;
                case /* repeated Vector destination_pos */ 6:
                    message.destinationPos.push(Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* QueryPathReq.OptionType query_type */ 11:
                    message.queryType = reader.int32();
                    break;
                case /* Vector3Int Unk3300_LHNGPJFOMIK = 4 [json_name = "Unk3300LHNGPJFOMIK"];*/ 4:
                    message.unk3300LHNGPJFOMIK = Vector3Int_1.Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.unk3300LHNGPJFOMIK);
                    break;
                case /* uint32 scene_id */ 2:
                    message.sceneId = reader.uint32();
                    break;
                case /* Vector source_pos */ 8:
                    message.sourcePos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.sourcePos);
                    break;
                case /* Vector3Int Unk3300_CLGJBBJDOLN = 5 [json_name = "Unk3300CLGJBBJDOLN"];*/ 5:
                    message.unk3300CLGJBBJDOLN = Vector3Int_1.Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.unk3300CLGJBBJDOLN);
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
        /* QueryFilter filter = 7; */
        if (message.filter)
            QueryFilter_1.QueryFilter.internalBinaryWrite(message.filter, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 query_id = 3; */
        if (message.queryId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.queryId);
        /* repeated Vector destination_pos = 6; */
        for (let i = 0; i < message.destinationPos.length; i++)
            Vector_1.Vector.internalBinaryWrite(message.destinationPos[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* QueryPathReq.OptionType query_type = 11; */
        if (message.queryType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.queryType);
        /* Vector3Int Unk3300_LHNGPJFOMIK = 4 [json_name = "Unk3300LHNGPJFOMIK"]; */
        if (message.unk3300LHNGPJFOMIK)
            Vector3Int_1.Vector3Int.internalBinaryWrite(message.unk3300LHNGPJFOMIK, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 2; */
        if (message.sceneId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* Vector source_pos = 8; */
        if (message.sourcePos)
            Vector_1.Vector.internalBinaryWrite(message.sourcePos, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector3Int Unk3300_CLGJBBJDOLN = 5 [json_name = "Unk3300CLGJBBJDOLN"]; */
        if (message.unk3300CLGJBBJDOLN)
            Vector3Int_1.Vector3Int.internalBinaryWrite(message.unk3300CLGJBBJDOLN, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QueryPathReq
 */
exports.QueryPathReq = new QueryPathReq$Type();
